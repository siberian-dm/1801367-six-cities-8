import classNames from 'classnames';
import Header from '../../common/header/header';
import NoOffers from './no-offers';
import Offers from './offers';
import TabList from './tab-list';
import { getIsAnyOffersByCity } from '../../../store/reducers/app-data/selectors';
import { useSelector } from 'react-redux';

function Main(): JSX.Element {
  const isAnyOffersByCity = useSelector(getIsAnyOffersByCity);

  const mainClass = classNames(
    'page__main page__main--index',
    {
      'page__main--index-empty': !isAnyOffersByCity,
    });

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <TabList/>
        <div className="cities">
          {isAnyOffersByCity
            ? <Offers/>
            : <NoOffers/>}
        </div>
      </main>
    </div>
  );
}

export default Main;
