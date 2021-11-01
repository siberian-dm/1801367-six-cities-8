import classNames from 'classnames';
import { City } from '../../../types/city';

type TabItemProps = {
  city: City;
  isChecked: boolean;
  onTabClick: (city: City) => void;
}

function TabItem({ city, isChecked, onTabClick }: TabItemProps): JSX.Element {
  const linkClass = classNames(
    'locations__item-link tabs__item',
    {
      'tabs__item--active': isChecked,
    },
  );

  return (
    <li className="locations__item">
      <a
        className={linkClass}
        href="/"
        onClick={(evt) => {
          evt.preventDefault();
          onTabClick(city);
        }}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

export default TabItem;
