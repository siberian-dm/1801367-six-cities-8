import Header from '../common/header';
import OfferList from '../common/offer-list';
import { getOffers } from '../../store/app-data/selectors';
import { OfferType } from '../../const';
import { useSelector } from 'react-redux';

function Favorites(): JSX.Element {
  const offers = useSelector(getOffers);
  const favoriteOffers = offers.filter(({ isFavorite }) => isFavorite);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OfferList type={OfferType.Favorites} offers={favoriteOffers}/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
