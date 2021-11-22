import { AppDataState } from '../../../types/store';
import { CityName, SortingType } from '../../../const';
import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setActiveCity, setActiveSorting, setIsDataLoaded } from '../../action';

const initialState: AppDataState = {
  activeCity: CityName.Paris,
  activeSorting: SortingType.Popular,
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
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
