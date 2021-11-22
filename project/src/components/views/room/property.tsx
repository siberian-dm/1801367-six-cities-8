import BookmarkButton from '../../common/bookmark-button';
import classNames from 'classnames';
import Map from '../../common/map/map';
import OfferList from '../../common/offer-list';
import ReviewForm from './review-form';
import ReviewItem from './review-item';
import {
  AppRoute,
  AuthStatus,
  BookmarkButtonType,
  MapType,
  OfferType,
  StringFormat
} from '../../../const';
import { calculateRating, formatString } from '../../../utils';
import { getAuthStatus } from '../../../store/reducers/user-data/selectors';
import { getNearbyOffersById, getOfferById, getReviewsById } from '../../../store/reducers/room-data/selectors';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

function Property(): JSX.Element {
  const offer = useSelector(getOfferById);
  const reviews = useSelector(getReviewsById);
  const nearbyOffers = useSelector(getNearbyOffersById);
  const authStatus = useSelector(getAuthStatus);

  if (!offer) {
    return <Redirect to={AppRoute.NotFound}/>;
  }

  const {
    id,
    city,
    isPremium,
    images,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;

  const divHostAvatarClass = classNames(
    'property__avatar-wrapper user__avatar-wrapper',
    {
      'property__avatar-wrapper--pro': host.isPro,
    });

  return (
    <>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((image) => (
              <div key={image} className="property__image-wrapper">
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
              <BookmarkButton
                offerId={id}
                buttonType={BookmarkButtonType.Property}
                isFavorite={isFavorite}
              />
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
                {formatString(type, StringFormat.Capitalize)}
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
                  <li key={good} className="property__inside-item">
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
              {authStatus === AuthStatus.Auth && <ReviewForm offerId={id}/>}
            </section>
          </div>
        </div>
        <Map
          mapType={MapType.PropertyMap}
          cityLocation={city}
          points={[...nearbyOffers, offer]}
          selectedPoint={offer}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferList
              type={OfferType.NearPlaces}
              offers={nearbyOffers}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Property;
