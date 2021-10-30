import Header from '../../common/header';
import Map from '../../common/map';
import OfferList from '../../common/offer-list';
import { Actions } from '../../../types/action';
import { City } from '../../../types/city';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { generateOffers } from '../../../mock/offers';
import { MapType, OfferType } from '../../../const';
import { Offer } from '../../../types/hotel';
import { setCity, setOffers } from '../../../store/action';
import { State } from '../../../types/state';
import { useEffect, useState } from 'react';

const mapStateToProps = ({ city, offers }: State) => ({
  city,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onCityChange(city: City) {
    dispatch(setCity(city));
  },
  onComponentLoad(offers: Offer[]) {
    dispatch(setOffers(offers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux): JSX.Element {
  const { onComponentLoad } = props;
  const [ ActiveOfferCard, setActiveOfferCard ] = useState<Offer | undefined>();

  const handleOfferCardHover = (offerCard: Offer) => (): void => {
    setActiveOfferCard(offerCard);
  };

  useEffect(() => {
    const offers = generateOffers();
    onComponentLoad(offers);
  }, [onComponentLoad]);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active" href="/">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="/">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{props.offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferList type={OfferType.Cities} onMouseOver={handleOfferCardHover} {...props}/>
            </section>
            <div className="cities__right-section">
              <Map mapType={MapType.CitiesMap} points={props.offers} selectedPoint={ActiveOfferCard}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export {Main};
export default connector(Main);
