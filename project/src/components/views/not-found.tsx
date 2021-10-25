import Header from '../common/header';
import { Link } from 'react-router-dom';

function NotFound():JSX.Element {
  return (
    <section>
      <Header isShowNavigation={false}/>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <h1>404. Page not found</h1>
        <Link className="locations__item-link" to="/">Go back to the main page</Link>
      </section>
    </section>
  );
}

export default NotFound;
