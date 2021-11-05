import { City } from '../../../types/city';
import { createSlice } from '@reduxjs/toolkit';
import { DataType, MainDataState } from '../../../types/store';
import { SortType } from '../../../const';

const initialState: MainDataState = {
  city: City.Paris,
  sort: SortType.Popular,
};

const mainData = createSlice({
  name: DataType.Main,
  initialState: initialState,
  reducers: {
    setCity(state, action) {
      state.city = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

const { actions, reducer } = mainData;

export const { setCity, setSort } = actions;

export default reducer;
