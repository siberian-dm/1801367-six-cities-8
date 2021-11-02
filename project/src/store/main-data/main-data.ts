import { City } from '../../types/city';
import { createReducer } from '@reduxjs/toolkit';
import { MainData } from '../../types/state';
import { setCity, setSort } from '../action';
import { SortType } from '../../const';

const initialState: MainData = {
  city: City.Paris,
  sort: SortType.Popular,
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    });
});

export {mainData};
