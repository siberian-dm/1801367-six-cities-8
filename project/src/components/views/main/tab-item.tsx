import classNames from 'classnames';
import { CityName, StringFormat } from '../../../const';
import { formatString } from '../../../utils';
import { Link } from 'react-router-dom';
import { setActiveCity } from '../../../store/action';
import { useDispatch } from 'react-redux';

type TabItemProps = {
  city: CityName;
  isChecked: boolean;
}

function TabItem({ city, isChecked }: TabItemProps): JSX.Element {
  const linkClass = classNames(
    'locations__item-link tabs__item',
    {
      'tabs__item--active': isChecked,
    },
  );

  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(setActiveCity(city));
  };

  return (
    <li className="locations__item">
      <Link
        className={linkClass}
        to="/"
        onClick={handleLinkClick}
      >
        <span>{formatString(city, StringFormat.Capitalize)}</span>
      </Link>
    </li>
  );
}

export default TabItem;
