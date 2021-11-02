import Favorites from '../views/favorites';
import Login from '../views/login';
import Main from '../views/main/main';
import NotFound from '../views/not-found';
import PrivateRoute from './private-route';
import Room from '../views/room/room';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { generateOffers } from '../../mock/offers';
import { generateReviews } from '../../mock/reviews';
import { setOffers, setReviews } from '../../store/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOffers(generateOffers()));
    dispatch(setReviews(generateReviews()));
  }, [dispatch]);

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
          <Room/>
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          render={() => <Favorites/>}
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
