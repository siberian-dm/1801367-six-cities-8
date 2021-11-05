import { City } from './city';
import { Offer } from './hotel';
import { Review } from './comment';
import { SortType } from '../const';
import { RootState } from '../store/root-reducer';

export enum DataType {
  App = 'APP',
  Main = 'MAIN',
}

export interface MainDataState {
  city: City;
  sort: SortType;
}

export interface AppDataState {
  offers: Offer[] | [];
  reviews: Review[] | [];
}

export type State = RootState;

