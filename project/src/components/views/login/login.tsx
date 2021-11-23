import Header from '../../common/header/header';
import LoginForm from './login-form';
import { CityName, StringFormat } from '../../../const';
import { formatString, getRandomArrayItem } from '../../../utils';
import { Link } from 'react-router-dom';
import { setActiveCity } from '../../../store/action';
import { useDispatch } from 'react-redux';

function Login(): JSX.Element {
  const randomCity = getRandomArrayItem(Object.values(CityName));

  const dispatch = useDispatch();

  const handleLinkClick = (): void => {
    dispatch(setActiveCity(randomCity));
  };

  return (
    <div className="page page--gray page--login">
      <Header isShowNavigation={false}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="/"
                onClick={handleLinkClick}
              >
                <span>{formatString(randomCity, StringFormat.Capitalize)}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
