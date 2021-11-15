import Favorites from '../views/favorites';
import Login from '../views/login';
import Main from '../views/main/main';
import NotFound from '../views/not-found/not-found';
import PrivateRoute from './private-route';
import Room from '../views/room/room';
import { AppRoute } from '../../const';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { checkAuthAction, fetchOffersAction } from '../../store/api-action';
import { generateReviews } from '../../mock/reviews';
import { setReviews } from '../../store/reducers/app-data/app-data';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
    dispatch(setReviews(generateReviews()));
  }, [dispatch]);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
