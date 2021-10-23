import RadioInput from './radio-input';
import { ChangeEvent, useState } from 'react';

const Ratings = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function ReviewForm(): JSX.Element {
  const [, setRating] = useState('');
  const [, setComment] = useState('');

  const handleRatingInputChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setRating(evt.target.value);
  };

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(evt.target.value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleRatingInputChange}>
        {Object.entries(Ratings).reverse()
          .map(([value, title]) => (
            <RadioInput
              key={title}
              value={value}
              title={title}
            />
          ))}
      </div>
      <textarea
        onChange={handleTextareaChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
