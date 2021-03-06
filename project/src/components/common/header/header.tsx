import Navigation from './navigation';
import NavigationNotLogged from './navigation-not-logged';
import { AuthStatus } from '../../../const';
import { getAuthStatus, getUserEmail } from '../../../store/reducers/user-data/selectors';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

type HeaderProps = {
  isShowNavigation?: boolean;
}

function Header({ isShowNavigation = true }: HeaderProps): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const userEmail = useSelector(getUserEmail);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isShowNavigation && (
            (authStatus === AuthStatus.Auth && userEmail !== null)
              ? <Navigation userEmail={userEmail}/>
              : <NavigationNotLogged/>)}
        </div>
      </div>
    </header>
  );
}

export default Header;
