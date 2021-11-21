import appDataReducer from './reducers/app-data/app-data';
import roomDataReducer from './reducers/room-data/room-data';
import userDataReducer from './reducers/user-data/user-data';
import { combineReducers } from '@reduxjs/toolkit';
import { DataType } from '../types/store';

export const rootReducer = combineReducers({
  [DataType.App]: appDataReducer,
  [DataType.User]: userDataReducer,
  [DataType.Room]: roomDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
