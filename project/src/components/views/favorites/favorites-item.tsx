import OfferList from '../../common/offer-list';
import { AppOffer } from '../../../types/app-data';
import { CityName, OfferType, StringFormat } from '../../../const';
import { formatString } from '../../../utils';
import { Link } from 'react-router-dom';
import { setActiveCity } from '../../../store/action';
import { useDispatch } from 'react-redux';

interface FavoritesItemProps {
  cityName: CityName;
  offers: AppOffer[];
}

function FavoritesItem({ cityName, offers }: FavoritesItemProps): JSX.Element {
  const dispatch = useDispatch();

  const handleLinkClick = (): void => {
    dispatch(setActiveCity(cityName));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={handleLinkClick}
          >
            <span>{formatString(cityName, StringFormat.Capitalize)}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <OfferList type={OfferType.Favorites} offers={offers}/>
      </div>
    </li>
  );
}

export default FavoritesItem;
