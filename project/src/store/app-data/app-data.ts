import { AppData } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setOffers, setReviews } from '../action';

const initialState: AppData = {
  offers: [],
  reviews: [],
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {appData};
