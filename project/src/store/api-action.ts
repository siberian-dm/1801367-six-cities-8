import { adaptDataToClient } from './adapter';
import { APIRoute, AppRoute, AuthStatus } from '../const';
import { AppOffer } from '../types/app-data';
import { AuthInfo, ServerOffer } from '../types/server-data';
import { dropToken, saveToken } from '../services/token';
import {
  redirectToRoute,
  requireLogout,
  setAuthStatus,
  setIsDataLoaded,
  setIsPostingReview,
  setIsRoomDataLoaded,
  setNearbyOffersById,
  setOfferById,
  setOffers,
  setReviewsById,
  setUserEmail
} from './action';
import { ThunkActionResult } from '../types/action';
import { toast } from 'react-toastify';

type AuthData = {
  email: string;
  password: string;
}

type ReviewPost = {
  id: number;
  comment: string;
  rating: number;
}

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(setIsDataLoaded(false));

      const { data } = await api.get(APIRoute.Hotels);
      const adaptedData = data.map(adaptDataToClient);

      dispatch(setOffers(adaptedData));
    }
    catch (error) {
      toast.error(String(error));
    }
    finally {
      dispatch(setIsDataLoaded(true));
    }
  };

export const fetchRoomDataById = (id: number): ThunkActionResult =>
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

      dispatch(setOfferById(adaptedOffer));
      dispatch(setNearbyOffersById(adaptedNearbyOffers));
      dispatch(setReviewsById(adaptedReviews));
    }
    catch (error) {
      toast.error(String(error));
    }
    finally {
      dispatch(setIsRoomDataLoaded(true));
    }
  };

export const postReviewAction = ({id, comment, rating}: ReviewPost): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(setIsPostingReview(true));
      const { data } = await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});

      const adaptedReviews = data.map(adaptDataToClient);
      dispatch(setReviewsById(adaptedReviews));
    }
    catch (error) {
      toast.error(String(error));
    }
    finally {
      dispatch(setIsPostingReview(false));
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

export const postIsFavoriteOfferAction = (id: number, status: number): ThunkActionResult =>
  async (dispatch, getState, api) => {
    try{
      const { data } = await api.post<ServerOffer>(`${APIRoute.Favorite}/${id}/${status}`);

      const adaptedOffer = adaptDataToClient<ServerOffer, AppOffer>(data);

      const { offers } = getState()['APP'];

      const offerIndex = offers.findIndex((offerItem) => offerItem.id === adaptedOffer.id);

      if (offerIndex !== -1) {
        dispatch(setOffers([
          ...offers.slice(0, offerIndex),
          adaptedOffer,
          ...offers.slice(offerIndex + 1),
        ]));
      }

      const { offerById, nearbyOffersById } = getState()['ROOM'];

      if (offerById && offerById.id === adaptedOffer.id) {
        dispatch(setOfferById(adaptedOffer));
      }

      const nearbyOfferIndex = nearbyOffersById.findIndex((offerItem) => offerItem.id === adaptedOffer.id);

      if (nearbyOfferIndex !== -1) {
        dispatch(setNearbyOffersById([
          ...nearbyOffersById.slice(0, nearbyOfferIndex),
          adaptedOffer,
          ...nearbyOffersById.slice(nearbyOfferIndex + 1),
        ]));
      }
    }
    catch (error) {
      toast.error(String(error));
    }
  };
