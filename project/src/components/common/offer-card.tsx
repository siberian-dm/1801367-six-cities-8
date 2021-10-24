import BookmarkButton from './bookmark-button';
import classNames from 'classnames';
import { BookmarkButtonType, CardType } from '../../const';
import { calculateRating, capitalizeString } from '../../utils';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/hotel';

const ImageWidth = {
  [CardType.Cities]: '260',
  [CardType.NearPlaces]: '260',
  [CardType.Favorites]: '150',
};

const ImageHeight = {
  [CardType.Cities]: '200',
  [CardType.NearPlaces]: '200',
  [CardType.Favorites]: '110',
};

type OfferCardProps = {
  cardType: CardType;
  offer: Offer;
  onMouseOver?: () => void;
}

function OfferCard({ cardType, offer, onMouseOver }: OfferCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, rating, title, type } = offer;

  const articleClass = classNames(
    'place-card',
    {
      'cities__place-card': cardType === CardType.Cities,
      'near-places__card': cardType === CardType.NearPlaces,
      'favorites__card': cardType === CardType.Favorites,
    });

  const divImageClass = classNames(
    'place-card__image-wrapper',
    {
      [`${cardType}__image-wrapper`]: true,
    });

  const divInfoClass = classNames(
    'place-card__info',
    {
      'favorites__card-info': cardType === CardType.Favorites,
    });

  return (
    <article className={articleClass} onMouseOver={onMouseOver}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={divImageClass}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={ImageWidth[cardType]}
            height={ImageHeight[cardType]}
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
          <BookmarkButton
            buttonType={BookmarkButtonType.PlaceCard}
            isFavorite={isFavorite}
          />
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
