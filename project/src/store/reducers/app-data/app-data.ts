import { AppDataState, DataType } from '../../../types/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AppDataState = {
  offers: [],
  reviews: [],
  isDataLoading: false,
};

const appData = createSlice({
  name: DataType.App,
  initialState: initialState,
  reducers: {
    setIsDataLoading(state, action) {
      state.isDataLoading = action.payload;
    },
    loadOffers(state, action) {
      state.offers = action.payload;
    },
    setReviews(state, action) {
      state.reviews = action.payload;
    },
  },
});

const { actions, reducer } = appData;

export const { setIsDataLoading, loadOffers, setReviews } = actions;

export default reducer;
