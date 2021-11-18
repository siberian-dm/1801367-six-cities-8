import { adaptDataToClient } from './adapter';
import { APIRoute, AppRoute, AuthStatus } from '../const';
import { AuthInfo } from '../types/auth-info';
import { dropToken, saveToken } from '../services/token';
import {
  loadOffers,
  redirectToRoute,
  requireLogout,
  setAuthStatus,
  setUserEmail
} from './action';
import { ThunkActionResult } from '../types/action';
import { toast } from 'react-toastify';

type AuthData = {
  email: string;
  password: string;
}

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get(APIRoute.Hotels);
      const adapteddata = data.map(adaptDataToClient);

      dispatch(loadOffers(adapteddata));
    }
    catch (error) {
      toast.error(String(error));
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get<AuthInfo>(APIRoute.Login);

    dispatch(setUserEmail(data.email));
    dispatch(setAuthStatus(AuthStatus.Auth));
  };

export const loginAction = ({ email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.post<AuthInfo>(APIRoute.Login, {email, password});

      saveToken(data.token);
      dispatch(setAuthStatus(AuthStatus.Auth));
      dispatch(setUserEmail(data.email));
      dispatch(redirectToRoute(AppRoute.Root));
    }
    catch (error) {
      toast.error(String(error));
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
