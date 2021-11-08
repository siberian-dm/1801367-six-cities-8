import appDataReducer from './reducers/app-data/app-data';
import { combineReducers } from '@reduxjs/toolkit';
import { DataType } from '../types/store';

export const rootReducer = combineReducers({
  [DataType.App]: appDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
