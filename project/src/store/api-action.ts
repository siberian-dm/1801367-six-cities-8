import { adaptDataToClient } from './adapter';
import { APIRoute, AppRoute, AuthStatus } from '../const';
import { dropToken, saveToken, Token } from '../services/token';
import {
  loadOffers,
  redirectToRoute,
  requireLogout,
  setAuthStatus
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
    await api.get(APIRoute.Login);
    dispatch(setAuthStatus(AuthStatus.Auth));
  };

export const loginAction = ({ email, password }: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const { data } = await api.post<{token: Token}>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setAuthStatus(AuthStatus.Auth));
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
