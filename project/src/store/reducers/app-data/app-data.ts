import { AppDataState } from '../../../types/store';
import { CityName, SortingType } from '../../../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  setActiveCity,
  setActiveSorting,
  setFavorites,
  setIsFavoritesLoading,
  setIsOffersLoading,
  setOffers
} from '../../action';

const initialState: AppDataState = {
  activeCity: CityName.Paris,
  activeSorting: SortingType.Popular,
  offers: [],
  favorites: [],
  isOffersLoading: false,
  isFavoritesLoading: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      const { offers } = action.payload;

      state.offers = offers;
    })
    .addCase(setFavorites, (state, action) => {
      const { offers } = action.payload;

      state.favorites = offers;
    })
    .addCase(setIsOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setIsFavoritesLoading, (state, action) => {
      state.isFavoritesLoading = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setActiveSorting, (state, action) => {
      state.activeSorting = action.payload;
    });
});

export default appData;
