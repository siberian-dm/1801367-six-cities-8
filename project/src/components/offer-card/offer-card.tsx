import classNames from 'classnames';
import { CardType, offerTypes } from '../../const';
import { Offer } from '../../types/hotel';

type OfferCardProps = {
  cardType: CardType;
  offer: Offer;
  onMouseOver?: () => void;
}

function OfferCard({ cardType, offer, onMouseOver }: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, isFavorite, rating, title, type} = offer;

  const bookmarkButtonClass = classNames({
    button: true,
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': isFavorite,
  });

  const articleClass = classNames({
    'place-card': true,
    'cities__place-card': cardType === CardType.CityPlace,
    'near-places__card': cardType === CardType.NearPlace,
    'favorites__card': cardType === CardType.Favorite,
  });

  const divImageClass = classNames({
    'place-card__image-wrapper': true,
    'cities__image-wrapper': cardType === CardType.CityPlace,
    'near-places__image-wrapper': cardType === CardType.NearPlace,
    'favorites__image-wrapper': cardType === CardType.Favorite,
  });

  const divInfoClass = classNames({
    'place-card__info': true,
    'favorites__card-info': cardType === CardType.Favorite,
  });

  return (
    <article className={articleClass} onMouseOver={onMouseOver}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={divImageClass}>
        <a href="/">
          <img className="place-card__image"
            src={previewImage}
            width={cardType === CardType.Favorite ? '150' : '260'}
            height={cardType === CardType.Favorite ? '110' : '200'}
            alt="Place"
          />
        </a>
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
            <span style={{width: `${rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="/">{title}</a>
        </h2>
        <p className="place-card__type">{offerTypes[type]}</p>
      </div>
    </article>
  );
}

export default OfferCard;
