import classNames from 'classnames';
import Header from '../../common/header';
import NoOffers from './no-offers';
import Offers from './offers';
import TabItem from './tab-item';
import { CityName, SortingType } from '../../../const';
import { getOffers } from '../../../store/reducers/app-data/selectors';
import { isValueInEnum, sortOffers } from '../../../utils';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

type MainParams = {
  city: CityName;
  sorting: SortingType;
}

function Main(): JSX.Element {
  const { city, sorting }: MainParams = useParams();

  const offers = useSelector(getOffers);

  const activeCity = isValueInEnum(city, CityName) ? city : CityName.Paris;
  const activeSorting = isValueInEnum(sorting, SortingType) ? sorting : SortingType.Popular;

  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const sortedOffersByCity = sortOffers(offersByCity, activeSorting);

  const mainClass = classNames(
    'page__main page__main--index',
    {
      'page__main--index-empty': !offersByCity.length,
    });

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(CityName).map((cityItem) => (
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
          {offersByCity.length
            ?
            <Offers
              sorting={activeSorting}
              city={activeCity}
              offers={sortedOffersByCity}
            />
            : <NoOffers city={activeCity}/>}
        </div>
      </main>
    </div>
  );
}

export default Main;
