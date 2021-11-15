import BookmarkButton from './bookmark-button';
import classNames from 'classnames';
import { BookmarkButtonType, OfferType, StringFormat } from '../../const';
import { calculateRating, formatString } from '../../utils';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/hotel';

const imageWidth = {
  [OfferType.Cities]: '260',
  [OfferType.NearPlaces]: '260',
  [OfferType.Favorites]: '150',
};

const imageHeight = {
  [OfferType.Cities]: '200',
  [OfferType.NearPlaces]: '200',
  [OfferType.Favorites]: '110',
};

type OfferCardProps = {
  cardType: OfferType;
  offer: Offer;
  onMouseOver?: () => void;
}

function OfferCard({ cardType, offer, onMouseOver }: OfferCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, rating, title, type } = offer;

  const articleClass = classNames(
    'place-card',
    {
      'cities__place-card': cardType === OfferType.Cities,
      'near-places__card': cardType === OfferType.NearPlaces,
      'favorites__card': cardType === OfferType.Favorites,
    });

  const divImageClass = classNames(
    'place-card__image-wrapper',
    {
      [`${cardType}__image-wrapper`]: true,
    });

  const divInfoClass = classNames(
    'place-card__info',
    {
      'favorites__card-info': cardType === OfferType.Favorites,
    });

  return (
    <article className={articleClass} onMouseOver={onMouseOver}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={divImageClass}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image"
            src={previewImage}
            width={imageWidth[cardType]}
            height={imageHeight[cardType]}
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
        <p className="place-card__type">
          {formatString(type, StringFormat.Capitalize)}
        </p>
      </div>
    </article>
  );
}

export default OfferCard;
