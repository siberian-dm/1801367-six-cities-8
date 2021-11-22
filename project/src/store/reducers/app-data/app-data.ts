import { AppDataState } from '../../../types/store';
import { CityName, SortingType } from '../../../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  setActiveCity,
  setActiveSorting,
  setIsDataLoaded,
  setOffers
} from '../../action';

const initialState: AppDataState = {
  activeCity: CityName.Paris,
  activeSorting: SortingType.Popular,
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      const { offers } = action.payload;

      state.offers = offers;
    })
    .addCase(setIsDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveSorting, (state, action) => {
      state.activeSorting = action.payload;
    });
});

export default appData;
