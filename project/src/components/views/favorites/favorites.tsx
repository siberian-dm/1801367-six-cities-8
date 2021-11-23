import FavoritesEmpty from './favorites-empty';
import FavoritesList from './favorites-list';
import Header from '../../common/header/header';
import { fetchFavoriteOffersAction } from '../../../store/api-action';
import { getIsAnyFavorites, getOffers } from '../../../store/reducers/app-data/selectors';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function Favorites(): JSX.Element {
  const allOffers = useSelector(getOffers);
  const IsAnyFavorites = useSelector(getIsAnyFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch, allOffers]);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {IsAnyFavorites
            ? <FavoritesList/>
            : <FavoritesEmpty/>}
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
