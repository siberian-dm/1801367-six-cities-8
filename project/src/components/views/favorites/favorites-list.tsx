import FavoritesItem from './favorites-item';
import Loading from '../../common/loading/loading';
import { getFavoritesByCity, getIsFavoritesLoading } from '../../../store/reducers/app-data/selectors';
import { useSelector } from 'react-redux';

function FavoritesList(): JSX.Element {
  const favoritesByCity = useSelector(getFavoritesByCity);
  const isFavoritesLoading = useSelector(getIsFavoritesLoading);

  if (isFavoritesLoading) {
    return <Loading/>;
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
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
      </ul>
    </section>
  );
}

export default FavoritesList;
