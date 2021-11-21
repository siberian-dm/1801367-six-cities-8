import RadioInput from './radio-input';
import { ChangeEvent, FormEvent, useState } from 'react';
import { getIsPostingReview } from '../../../store/reducers/room-data/selectors';
import { postReviewAction } from '../../../store/api-action';
import { useDispatch, useSelector } from 'react-redux';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const Ratings = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useDispatch();
  const isPostingReview = useSelector(getIsPostingReview);

  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const isSubmitDisabled = rating.length === 0 || comment.length < 50;

  const handleRatingInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setRating(evt.target.value);
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(postReviewAction({
      id: offerId,
      comment,
      rating: +rating,
    }));
    setRating('');
    setComment('');
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating" onChange={handleRatingInputChange}>
        {Object.entries(Ratings).reverse()
          .map(([value, title]) => (
            <RadioInput
              key={title}
              value={value}
              title={title}
              isDisabled={isPostingReview}
              isChecked={value === rating}
            />
          ))}
      </div>
      <textarea
        minLength={MIN_COMMENT_LENGTH}
        maxLength={MAX_COMMENT_LENGTH}
        onChange={handleTextareaChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isPostingReview}
        value={comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled || isPostingReview}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
