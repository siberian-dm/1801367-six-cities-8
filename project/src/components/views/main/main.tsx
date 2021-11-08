import classNames from 'classnames';
import Header from '../../common/header';
import NoOffers from './no-offers';
import Offers from './offers';
import TabItem from './tab-item';
import { City } from '../../../types/city';
import { getOffers } from '../../../store/reducers/app-data/selectors';
import { isValueInEnum, sortOffers } from '../../../utils';
import { SortingType } from '../../../const';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

type MainParams = {
  city: City;
  sorting: SortingType;
}

function Main(): JSX.Element {
  const { city, sorting }: MainParams = useParams();

  const activeCity = isValueInEnum(city, City) ? city : City.Paris;
  const activeSorting = isValueInEnum(sorting, SortingType) ? sorting : SortingType.Popular;

  const offers = useSelector(getOffers);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  const sortedAndFilteredOffers = sortOffers(filteredOffers, activeSorting);

  const mainClass = classNames(
    'page__main page__main--index',
    {
      'page__main--index-empty': !filteredOffers.length,
    });

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(City).map((cityItem) => (
                <TabItem
                  key={cityItem}
                  city={cityItem}
                  isChecked={cityItem === activeCity}
                  sorting={activeSorting}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length
            ?
            <Offers
              offers={sortedAndFilteredOffers}
              sorting={activeSorting}
              city={activeCity}
            />
            : <NoOffers city={activeCity}/>}
        </div>
      </main>
    </div>
  );
}

export default Main;
