import browserHistory from '../../browser-history';
import Favorites from '../views/favorites';
import Login from '../views/login';
import Main from '../views/main/main';
import NotFound from '../views/not-found/not-found';
import PrivateRoute from './private-route';
import Room from '../views/room/room';
import { AppRoute } from '../../const';
import { Route, Router, Switch } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.Offers} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <Route path={AppRoute.Offer} exact>
          <Room/>
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
          exact
        />
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
