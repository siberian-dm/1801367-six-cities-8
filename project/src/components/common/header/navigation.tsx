import { AppRoute } from '../../../const';
import { Link } from 'react-router-dom';
import { requireLogout } from '../../../store/action';
import { useDispatch } from 'react-redux';


function Navigation(): JSX.Element {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(requireLogout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to=""
            onClick={handleLinkClick}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
