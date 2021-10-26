import classNames from 'classnames';
import OfferCard from './offer-card';
import { noop } from 'lodash';
import { Offer } from '../../types/hotel';
import { OfferType } from '../../const';

type OfferListProps = {
  type: OfferType;
  onMouseOver?: (offerCard: Offer) => () => void;
  offers: Offer[];
};

function OfferList ({ type, onMouseOver, offers }: OfferListProps):JSX.Element {
  const divClass = classNames({
    'cities__places-list places__list tabs__content': type === OfferType.Cities,
    'near-places__list places__list': type === OfferType.NearPlaces,
    'favorites__places': type === OfferType.Favorites,
  });

  return (
    <div className={divClass}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          cardType={type}
          offer={offer}
          onMouseOver={onMouseOver ? onMouseOver(offer) : noop}
        />
      ))}
    </div>
  );
}

export default OfferList;
