import Map from '../../common/map/map';
import OfferList from '../../common/offer-list';
import SortingForm from './sorting-form/sorting-form';
import {
  CityName,
  MapType,
  OfferType,
  SortingType
} from '../../../const';
import { Offer } from '../../../types/hotel';
import { useState } from 'react';

type OffersProps = {
  city: CityName;
  sorting: SortingType;
  offers: Offer[];
}

function Offers({ city, sorting, offers }: OffersProps): JSX.Element {
  const [ActiveOfferCard, setActiveOfferCard] = useState<Offer | undefined>();

  const cityLocation = offers[0].city;

  const handleOfferCardHover = (offerCard: Offer) => (): void => {
    setActiveOfferCard(offerCard);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <SortingForm city={city} sorting={sorting}/>
        <OfferList
          type={OfferType.Cities}
          onMouseOver={handleOfferCardHover}
          offers={offers}
        />
      </section>
      <div className="cities__right-section">
        <Map
          mapType={MapType.CitiesMap}
          cityLocation={cityLocation}
          points={offers} selectedPoint={ActiveOfferCard}
        />
      </div>
    </div>
  );
}

export default Offers;
