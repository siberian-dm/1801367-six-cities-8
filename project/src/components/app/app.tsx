import Favorites from '../views/favorites';
import Login from '../views/login';
import Main from '../views/main/main';
import NotFound from '../views/not-found';
import PrivateRoute from './private-route';
import Room from '../views/room/room';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Offers } from '../../types/hotel';
import { Reviews } from '../../types/comment';

function App(props: JSX.IntrinsicAttributes & Offers & Reviews): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login/>
        </Route>
        <Route path={AppRoute.Offer} exact>
          <Room {...props}/>
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <Favorites {...props}/>}
          authorizationStatus={AuthorizationStatus.Auth}
          exact
        />
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
