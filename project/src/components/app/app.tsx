import browserHistory from '../../browser-history';
import Favorites from '../views/favorites/favorites';
import Loading from '../common/loading/loading';
import Login from '../views/login';
import Main from '../views/main/main';
import NotFound from '../views/not-found/not-found';
import PrivateRoute from './private-route';
import Room from '../views/room/room';
import { AppRoute, AuthStatus } from '../../const';
import { getAuthStatus } from '../../store/reducers/user-data/selectors';
import { getIsOffersLoading } from '../../store/reducers/app-data/selectors';
import {
  Redirect,
  Route,
  Router,
  Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux';


function App(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const isOffersLoading = useSelector(getIsOffersLoading);

  if (authStatus === AuthStatus.Unknown || isOffersLoading) {
    return <Loading/>;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <Route path={AppRoute.Offer} exact>
          <Room/>
        </Route>
        <Route path={AppRoute.NotFound} exact>
          <NotFound/>
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
          exact
        />
        <Route>
          <Redirect to={AppRoute.NotFound}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
