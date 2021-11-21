import classNames from 'classnames';
import { formatString } from '../../../utils';
import { getActiveSorting } from '../../../store/reducers/app-data/selectors';
import { setActiveSorting } from '../../../store/action';
import { SortingType, StringFormat } from '../../../const';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SortingForm(): JSX.Element {
  const [isSortListOpen, setIsSortListOpen] = useState(false);

  const activeSorting = useSelector(getActiveSorting);

  const dispatch = useDispatch();

  const handleSortingClick = (): void => {
    setIsSortListOpen((prev) => !prev);
  };

  const handleSortingItemClick = (sortingItem: SortingType) => (): void => {
    dispatch(setActiveSorting(sortingItem));
    setIsSortListOpen((prev) => !prev);
  };

  const ulClass = classNames(
    'places__options places__options--custom',
    {
      'places__options--opened': isSortListOpen,
    });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingClick}
      >
        {formatString(activeSorting, StringFormat.Capitalize)}
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
                'places__option--active': sortingItem === activeSorting,
              })}
            tabIndex={0}
            onClick={handleSortingItemClick(sortingItem)}
          >
            {formatString(sortingItem, StringFormat.Capitalize)}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingForm;
