import appDataReducer from './reducers/app-data/app-data';
import mainDataReducer from './reducers/main-data/main-data';
import { combineReducers } from '@reduxjs/toolkit';
import { DataType } from '../types/store';

export const rootReducer = combineReducers({
  [DataType.App]: appDataReducer,
  [DataType.Main]: mainDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
