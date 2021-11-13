import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CityName, SortingType } from '../../../const';

type TabItemProps = {
  city: CityName;
  isChecked: boolean;
  sorting: SortingType;
}

function TabItem({ city, isChecked, sorting }: TabItemProps): JSX.Element {
  const linkClass = classNames(
    'locations__item-link tabs__item',
    {
      'tabs__item--active': isChecked,
    },
  );

  return (
    <li className="locations__item">
      <Link
        className={linkClass}
        to={`/${city}/offers/${sorting}`}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default TabItem;
