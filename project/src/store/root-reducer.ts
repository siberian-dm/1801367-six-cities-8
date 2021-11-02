import { appData } from './app-data/app-data';
import { combineReducers } from '@reduxjs/toolkit';
import { mainData } from './main-data/main-data';

export enum NameSpace {
  App = 'APP',
  Main = 'MAIN',
}

export const rootReducer = combineReducers({
  [NameSpace.App]: appData,
  [NameSpace.Main]: mainData,
});

export type RootState = ReturnType<typeof rootReducer>;
