import classNames from 'classnames';
import Header from '../../common/header';
import NoOffers from './no-offers';
import Offers from './offers';
import TabItem from './tab-item';
import { Actions } from '../../../types/action';
import { City } from '../../../types/city';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { generateOffers } from '../../../mock/offers';
import { Offer } from '../../../types/hotel';
import { setCity, setOffers } from '../../../store/action';
import { State } from '../../../types/state';
import { useEffect } from 'react';

const mapStateToProps = ({ city, offers }: State) => ({
  city,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onTabClick(city: City) {
    dispatch(setCity(city));
  },
  onComponentLoad(offers: Offer[]) {
    dispatch(setOffers(offers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const { city, offers, onTabClick, onComponentLoad } = props;

  useEffect(() => {
    onComponentLoad(generateOffers());
  }, [onComponentLoad]);

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
                  onTabClick={onTabClick}
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

export {Main};
export default connector(Main);
