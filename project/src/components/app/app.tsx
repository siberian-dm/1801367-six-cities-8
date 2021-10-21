import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import Main from '../pages/main/main';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Room from '../pages/room/room';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Offers } from '../../types/hotel';
import { Reviews } from '../../types/comment';

function App(props: JSX.IntrinsicAttributes & Offers & Reviews): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main {...props}/>
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
