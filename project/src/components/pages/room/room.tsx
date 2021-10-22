import classNames from 'classnames';
import NotFound from '../not-found/not-found';
import ReviewItem from '../../review-item/review-item';
import { nanoid } from '@reduxjs/toolkit';
import { Offer } from '../../../types/hotel';
import { CardType, offerTypes } from '../../../const';
import { Review } from '../../../types/comment';
import { useParams } from 'react-router-dom';
import OfferCard from '../../offer-card/offer-card';
import { calculateRating } from '../../../utils';
import ReviewForm from '../../review-form/review-form';

const MAX_OFFERS = 3;

type RoomProps = {
  offers: Offer[];
  reviews: Review[];
}

function Room({ offers, reviews }: RoomProps): JSX.Element {
  const {id}:{id?:string} = useParams();
  const offer = offers.find((item: Offer) => item.id === Number(id));

  if (!offer) {
    return <NotFound/>;
  }

  const {isPremium, images, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  const bookmarkButtonClass = classNames(
    'property__bookmark-button button',
    {
      'property__bookmark-button--active': isFavorite,
    });

  const divHostAvatarClass = classNames(
    'property__avatar-wrapper user__avatar-wrapper',
    {
      'property__avatar-wrapper--pro': host.isPro,
    });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={nanoid()} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={bookmarkButtonClass} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'} bookmark`}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: calculateRating(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerTypes[type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={nanoid()} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={divHostAvatarClass}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <ReviewItem
                      key={review.id}
                      review={review}
                    />
                  ))}
                </ul>
                <ReviewForm/>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers
                .filter((item) => item.id !== Number(id))
                .slice(0, MAX_OFFERS)
                .map((item) => (
                  <OfferCard
                    key={item.id}
                    cardType={CardType.NearPlace}
                    offer={item}
                  />
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
