import { AppDataState } from '../../../types/store';
import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, loadReviews } from '../../action';

const initialState: AppDataState = {
  offers: [],
  reviews: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      const { offers } = action.payload;

      state.offers = offers;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      const { reviews } = action.payload;

      state.reviews = reviews;
    });
});

export default appData;
