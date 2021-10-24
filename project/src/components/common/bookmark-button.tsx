import classNames from 'classnames';
import { BookmarkButtonType } from '../../const';

const iconWidth = {
  [BookmarkButtonType.PlaceCard]: '18',
  [BookmarkButtonType.Property]: '31',
};

const iconHeight = {
  [BookmarkButtonType.PlaceCard]: '19',
  [BookmarkButtonType.Property]: '33',
};


type BookmarkButtonProps = {
  buttonType: BookmarkButtonType;
  isFavorite: boolean;
}

function BookmarkButton({buttonType, isFavorite}: BookmarkButtonProps): JSX.Element {
  const svgClass = classNames({
    [`${buttonType}__bookmark-icon`]: true,
  });

  const buttonClass = classNames({
    [`${buttonType}__bookmark-button button`]: true,
    [`${buttonType}__bookmark-button--active`]: isFavorite,
  });

  return (
    <button className={buttonClass} type="button">
      <svg
        className={svgClass}
        width={iconWidth[buttonType]}
        height={iconHeight[buttonType]}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In' : 'To'} bookmark</span>
    </button>
  );
}

export default BookmarkButton;
