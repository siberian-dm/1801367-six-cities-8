import Map from '../../common/map';
import OfferList from '../../common/offer-list';
import SortForm from './sort-form';
import { getSort } from '../../../store/reducers/main-data/selectors';
import { MapType, OfferType, SortType } from '../../../const';
import { Offer } from '../../../types/hotel';
import { setSort } from '../../../store/reducers/main-data/main-data';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


type OffersProps = {
  offers: Offer[];
}

function Offers({ offers }: OffersProps): JSX.Element {
  const [ ActiveOfferCard, setActiveOfferCard ] = useState<Offer | undefined>();

  const dispatch = useDispatch();
  const activeSort = useSelector(getSort);

  const handleOfferCardHover = (offerCard: Offer) => (): void => {
    setActiveOfferCard(offerCard);
  };

  const handleSortChange = (sort: SortType): void => {
    dispatch(setSort(sort));
  };

  const sortOffers = (offersToSort: Offer[]) => {
    switch (activeSort) {
      case SortType.Popular:
        return offersToSort;
      case SortType.PriceHight:
        return offersToSort.slice().sort((a, b) => b.price - a.price);
      case SortType.PriceLow:
        return offersToSort.slice().sort((a, b) => a.price - b.price);
      case SortType.TopRated:
        return offersToSort.slice().sort((a, b) => b.rating - a.rating);
    }
  };

  const sortedOffers = sortOffers(offers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <SortForm activeSort={activeSort} onOptionClick={handleSortChange}/>
        <OfferList type={OfferType.Cities} onMouseOver={handleOfferCardHover} offers={sortedOffers}/>
      </section>
      <div className="cities__right-section">
        <Map mapType={MapType.CitiesMap} points={offers} selectedPoint={ActiveOfferCard}/>
      </div>
    </div>
  );
}

export default Offers;
