import Header from '../../common/header/header';
import styles from './not-found.module.css';
import { Link } from 'react-router-dom';

function NotFound():JSX.Element {
  return (
    <section>
      <Header isShowNavigation={false}/>
      <section className={styles.container}>
        <h1>404. Page not found</h1>
        <Link to="/">Go back to the main page</Link>
      </section>
    </section>
  );
}

export default NotFound;
