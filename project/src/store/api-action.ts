import { adaptDataToClient } from './adapter';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadOffers, setIsDataLoading } from './reducers/app-data/app-data';
import { setAuthorizationStatus } from './reducers/user-data/user-data';
import { ThunkActionResult } from '../types/action';
import { toast } from 'react-toastify';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(setIsDataLoading(true));

      const { data } = await api.get(APIRoute.Hotels);
      const adapteddata = data.map(adaptDataToClient);

      dispatch(loadOffers(adapteddata));
    }
    catch (error) {
      toast.error(String(error));
    }
    finally {
      dispatch(setIsDataLoading(false));
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  };
