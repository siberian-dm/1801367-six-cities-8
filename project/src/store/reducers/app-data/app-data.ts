import { AppDataState } from '../../../types/store';
import { createReducer } from '@reduxjs/toolkit';
import { loadOffers } from '../../action';

const initialState: AppDataState = {
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      const { offers } = action.payload;

      state.offers = offers;
      state.isDataLoaded = true;
    });
});

export default appData;
