import Navigation from './navigation';
import NavigationNotLogged from './navigation-not-logged';
import { AuthorizationStatus } from '../../../const';
import { getAuthorizationStatus } from '../../../store/reducers/user-data/selectors';
import { useSelector } from 'react-redux';

type HeaderProps = {
  isShowNavigation?: boolean;
}

function Header({ isShowNavigation = true }: HeaderProps): JSX.Element {
  const аuthorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          {isShowNavigation && (
            аuthorizationStatus === AuthorizationStatus.Auth
              ? <Navigation/>
              : <NavigationNotLogged/>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
