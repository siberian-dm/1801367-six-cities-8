import classNames from 'classnames';
import { AppRoute, AuthStatus, BookmarkButtonType } from '../../const';
import { getAuthStatus } from '../../store/reducers/user-data/selectors';
import { postIsFavoriteOfferAction } from '../../store/api-action';
import { redirectToRoute } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';

const iconWidth = {
  [BookmarkButtonType.PlaceCard]: '18',
  [BookmarkButtonType.Property]: '31',
};

const iconHeight = {
  [BookmarkButtonType.PlaceCard]: '19',
  [BookmarkButtonType.Property]: '33',
};


type BookmarkButtonProps = {
  offerId: number;
  buttonType: BookmarkButtonType;
  isFavorite: boolean;
}

function BookmarkButton({ offerId, buttonType, isFavorite }: BookmarkButtonProps): JSX.Element {
  const authStatus = useSelector(getAuthStatus);

  const svgClass = classNames({
    [`${buttonType}__bookmark-icon`]: true,
  });

  const buttonClass = classNames({
    [`${buttonType}__bookmark-button button`]: true,
    [`${buttonType}__bookmark-button--active`]: isFavorite,
  });

  const dispatch = useDispatch();

  const handleBoookmarkButtonClick = (): void => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(postIsFavoriteOfferAction(offerId, Number(!isFavorite)));
      return;
    }

    dispatch(redirectToRoute(AppRoute.Login));
  };

  return (
    <button
      className={buttonClass}
      type="button"
      onClick={handleBoookmarkButtonClick}
    >
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
