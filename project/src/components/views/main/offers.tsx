import Map from '../../common/map';
import OfferList from '../../common/offer-list';
import SortingForm from './sorting-form';
import { City } from '../../../types/city';
import { MapType, OfferType, SortingType } from '../../../const';
import { Offer } from '../../../types/hotel';
import { useState } from 'react';

type OffersProps = {
  offers: Offer[];
  city: City;
  sorting: SortingType;
}

function Offers({ offers, city, sorting }: OffersProps): JSX.Element {
  const [ ActiveOfferCard, setActiveOfferCard ] = useState<Offer | undefined>();

  const handleOfferCardHover = (offerCard: Offer) => (): void => {
    setActiveOfferCard(offerCard);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <SortingForm city={city} sorting={sorting}/>
        <OfferList type={OfferType.Cities} onMouseOver={handleOfferCardHover} offers={offers}/>
      </section>
      <div className="cities__right-section">
        <Map mapType={MapType.CitiesMap} points={offers} selectedPoint={ActiveOfferCard}/>
      </div>
    </div>
  );
}

export default Offers;
