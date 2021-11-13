import appDataReducer from './reducers/app-data/app-data';
import userDataReducer from './reducers/user-data/user-data';
import { combineReducers } from '@reduxjs/toolkit';
import { DataType } from '../types/store';

export const rootReducer = combineReducers({
  [DataType.App]: appDataReducer,
  [DataType.User]: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
