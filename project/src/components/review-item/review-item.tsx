import { calculateRating, getHumanizeDate } from '../../utils';
import { DateFormat } from '../../const';
import { Review } from '../../types/comment';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem({ review: { user, rating, comment, date} }: ReviewItemProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: calculateRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={getHumanizeDate(date, DateFormat.DigitYearMonthDay)}
        >
          {getHumanizeDate(date, DateFormat.FullMonthYear)}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
