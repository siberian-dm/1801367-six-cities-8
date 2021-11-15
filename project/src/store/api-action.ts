import { APIRoute } from '../const';
import { loadOffers, setIsDataLoading } from './reducers/app-data/app-data';
import { ThunkActionResult } from '../types/action';
import { adaptDataToClient } from './adapter';
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
