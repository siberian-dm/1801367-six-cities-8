import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/reducers/user-data/selectors';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render } = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login}/>
      )}
    />
  );
}

export default PrivateRoute;
