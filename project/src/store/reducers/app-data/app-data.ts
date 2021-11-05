import { AppDataState, DataType } from '../../../types/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AppDataState = {
  offers: [],
  reviews: [],
};

const appData = createSlice({
  name: DataType.App,
  initialState: initialState,
  reducers: {
    setOffers(state, action) {
      state.offers = action.payload;
    },
    setReviews(state, action) {
      state.reviews = action.payload;
    },
  },
});

const { actions, reducer } = appData;

export const { setOffers, setReviews } = actions;

export default reducer;
