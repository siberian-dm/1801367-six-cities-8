import classNames from 'classnames';
import Header from '../../common/header';
import NoOffers from './no-offers';
import Offers from './offers';
import TabItem from './tab-item';
import { City } from '../../../types/city';
import { getCity } from '../../../store/reducers/main-data/selectors';
import { getOffers } from '../../../store/reducers/app-data/selectors';
import { setCity } from '../../../store/reducers/main-data/main-data';
import { useDispatch, useSelector } from 'react-redux';

function Main(): JSX.Element {
  const dispatch = useDispatch();
  const offers = useSelector(getOffers);
  const city = useSelector(getCity);

  const filteredOffers = offers.filter((offer) => offer.city.name === city);

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
              {Object.values(City).map((item) => (
                <TabItem
                  key={item}
                  city={item}
                  isChecked={item === city}
                  onTabClick={() => dispatch(setCity(item))}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {filteredOffers.length
            ? <Offers offers={filteredOffers}/>
            : <NoOffers city={city}/>}
        </div>
      </main>
    </div>
  );
}

export default Main;
