import classNames from 'classnames';
import { calculateRating, capitalizeString } from '../../utils';
import { CardType } from '../../const';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/hotel';

const FavoriteCardImage = {
  WIDTH: '150',
  HEIGHT: '110',
};
const OtherCardImage = {
  WIDTH: '260',
  HEIGHT: '200',
};

type OfferCardProps = {
  cardType: CardType;
  offer: Offer;
  onMouseOver?: () => void;
}

function OfferCard({ cardType, offer, onMouseOver }: OfferCardProps): JSX.Element {
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = offer;

  const bookmarkButtonClass = classNames(
    'place-card__bookmark-button button',
    {
      'place-card__bookmark-button--active': isFavorite,
    });

  const articleClass = classNames(
    'place-card',
    {
      'cities__place-card': cardType === CardType.CityPlace,
      'near-places__card': cardType === CardType.NearPlace,
      'favorites__card': cardType === CardType.Favorite,
    });

  const divImageClass = classNames(
    'place-card__image-wrapper',
    {
      'cities__image-wrapper': cardType === CardType.CityPlace,
      'near-places__image-wrapper': cardType === CardType.NearPlace,
      'favorites__image-wrapper': cardType === CardType.Favorite,
    });

  const divInfoClass = classNames(
    'place-card__info',
    {
      'favorites__card-info': cardType === CardType.Favorite,
    });

  return (
    <article className={articleClass} onMouseOver={onMouseOver}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={divImageClass}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={cardType === CardType.Favorite ? FavoriteCardImage.WIDTH : OtherCardImage.WIDTH}
            height={cardType === CardType.Favorite ? FavoriteCardImage.HEIGHT : OtherCardImage.HEIGHT}
            alt="Place"
          />
        </Link>
      </div>
      <div className={divInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmark`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calculateRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeString(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
