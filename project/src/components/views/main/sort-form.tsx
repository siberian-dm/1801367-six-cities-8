import classNames from 'classnames';
import { useState } from 'react';
import { SortType } from '../../../const';

type SortFromProps = {
  activeSort: SortType;
  onOptionClick: (sort: SortType) => void;
}

function SortForm({ activeSort, onOptionClick }: SortFromProps): JSX.Element {
  const [ isSortListOpen, setIsSortListOpen ] = useState(false);

  const ulClass = classNames(
    'places__options places__options--custom',
    {
      'places__options--opened': isSortListOpen,
    });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsSortListOpen(!isSortListOpen)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={ulClass}>
        {Object.values(SortType).map((sort) => (
          <li key={sort}
            className={`places__option ${sort === activeSort ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              onOptionClick(sort);
              setIsSortListOpen(false);
            }}
          >
            {sort}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortForm;
