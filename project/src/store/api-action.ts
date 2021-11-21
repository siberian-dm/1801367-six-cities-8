import { adaptDataToClient } from './adapter';
import { APIRoute, AppRoute, AuthStatus } from '../const';
import { AppOffer } from '../types/app-data';
import { AuthInfo, ServerOffer } from '../types/server-data';
import { dropToken, saveToken } from '../services/token';
import {
  loadOffers,
  loadRoomDataById,
  redirectToRoute,
  requireLogout,
  setAuthStatus,
  setIsRoomDataLoaded,
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
      const adaptedData = data.map(adaptDataToClient);

      dispatch(loadOffers(adaptedData));
    }
    catch (error) {
      toast.error(String(error));
    }
  };

export const fetchRoomDataById = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(setIsRoomDataLoaded(false));

      const [
        {data: offer},
        {data: nearbyOffers},
        {data: reviews},
      ] = await Promise.all([
        api.get(`${APIRoute.Hotels}/${id}`),
        api.get(`${APIRoute.Hotels}/${id}/nearby`),
        api.get(`${APIRoute.Comments}/${id}`),
      ]);

      const adaptedOffer = adaptDataToClient<ServerOffer, AppOffer>(offer);
      const adaptedNearbyOffers = nearbyOffers.map(adaptDataToClient);
      const adaptedReviews = reviews.map(adaptDataToClient);

      dispatch(loadRoomDataById({
        offer: adaptedOffer,
        nearbyOffers: adaptedNearbyOffers,
        reviews: adaptedReviews,
      }));
    }
    catch (error) {
      toast.error(String(error));
    }
    finally {
      dispatch(setIsRoomDataLoaded(true));
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
