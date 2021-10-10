import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import PropertyPage from '../property-page/property-page';
import PrivateRoute from '../private-route/private-route';
import NotFoundPage from '../not-found-page/not-found-page';
import { Hotel } from '../../types/hotel';
import { AppRoute, AuthorizationStatus } from '../../const';

function App(props: JSX.IntrinsicAttributes & { hotels: Hotel[]; }): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <MainPage {...props}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <LoginPage/>
        </Route>
        <Route path={AppRoute.Offer} exact>
          <PropertyPage/>
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <FavoritesPage/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
          exact
        />
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
