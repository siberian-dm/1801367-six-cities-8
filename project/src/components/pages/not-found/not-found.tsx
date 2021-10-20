import { Link } from 'react-router-dom';

function NotFound():JSX.Element {
  return (
    <section>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <h1>404. Page not found</h1>
        <Link className="locations__item-link" to="/">Go back to the main page</Link>
      </section>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </section>
  );
}

export default NotFound;
