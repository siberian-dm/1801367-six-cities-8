import { AppRoute, AuthStatus } from '../../const';
import { getAuthStatus } from '../../store/reducers/user-data/selectors';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render } = props;
  const authStatus = useSelector(getAuthStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authStatus === AuthStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login}/>
      )}
    />
  );
}

export default PrivateRoute;
