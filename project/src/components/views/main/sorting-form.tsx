import classNames from 'classnames';
import { City } from '../../../types/city';
import { Link } from 'react-router-dom';
import { SortingType } from '../../../const';
import { useState } from 'react';

type SortingFormProps = {
  city: City;
  sorting: SortingType;
}

function SortingForm({ sorting, city }: SortingFormProps): JSX.Element {
  const [ isSortListOpen, setIsSortListOpen ] = useState(false);

  const ulClass = classNames(
    'places__options places__options--custom',
    {
      'places__options--opened': isSortListOpen,
    });

  const handleSpanClick = () => {
    setIsSortListOpen(!isSortListOpen);
  };

  const handleLinkClick = () => {
    setIsSortListOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSpanClick}
      >
        {sorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ulClass}>
        {Object.values(SortingType).map((sortingItem) => (
          <li key={sortingItem}
            className={classNames(
              'places__option',
              {
                'places__option--active': sortingItem === sorting,
              })}
            style={{padding: '0px'}}
            tabIndex={0}
          >
            <Link
              style={{
                display: 'block',
                padding: '14px 16px 10px',
              }}
              to={`/${city}/offers/${sortingItem}`}
              onClick={handleLinkClick}
            >
              {sortingItem}
            </Link>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
