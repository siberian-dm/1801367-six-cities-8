import FavoritesItem from './favorites-item';
import Header from '../../common/header/header';
import Loading from '../../common/loading/loading';
import { fetchFavoriteOffersAction } from '../../../store/api-action';
import { getFavoritesByCity, getIsFavoritesLoading, getOffers } from '../../../store/reducers/app-data/selectors';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Favorites(): JSX.Element {
  const allOffers = useSelector(getOffers);
  const favoritesByCity = useSelector(getFavoritesByCity);
  const isFavoritesLoading = useSelector(getIsFavoritesLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch, allOffers]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {isFavoritesLoading
              ? <Loading/>
              :
              <ul className="favorites__list">
                {favoritesByCity.map(({ cityName, offers }) =>
                  (
                    <FavoritesItem
                      key={cityName}
                      cityName={cityName}
                      offers={offers}
                    />
                  ),
                )}
              </ul>}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
