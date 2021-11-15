import classNames from 'classnames';
import styles from './sorting-form.module.css';
import { CityName, SortingType, StringFormat } from '../../../../const';
import { formatString } from '../../../../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type SortingFormProps = {
  city: CityName;
  sorting: SortingType;
}

function SortingForm({ sorting, city }: SortingFormProps): JSX.Element {
  const [isSortListOpen, setIsSortListOpen] = useState(false);

  const ulClass = classNames(
    'places__options places__options--custom',
    {
      'places__options--opened': isSortListOpen,
    });

  const handleSortClick = () => {
    setIsSortListOpen((prev) => !prev);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        {formatString(sorting, StringFormat.Capitalize)}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ulClass}>
        {Object.values(SortingType).map((sortingItem) => (
          <li key={sortingItem}
            className={classNames(
              `${styles.option} places__option`,
              {
                'places__option--active': sortingItem === sorting,
              })}
            tabIndex={0}
          >
            <Link
              to={`/${city}/offers/${sortingItem}`}
              onClick={handleSortClick}
            >
              {formatString(sortingItem, StringFormat.Capitalize)}
            </Link>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
