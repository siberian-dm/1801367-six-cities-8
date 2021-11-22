import TabItem from './tab-item';
import { CityName } from '../../../const';
import { getActiveCity } from '../../../store/reducers/app-data/selectors';
import { useSelector } from 'react-redux';

function TabList(): JSX.Element {
  const activeCity = useSelector(getActiveCity);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.values(CityName).map((cityItem) => (
            <TabItem
              key={cityItem}
              city={cityItem}
              isChecked={cityItem === activeCity}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TabList;
