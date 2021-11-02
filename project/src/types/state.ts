import { City } from './city';
import { Offer } from './hotel';
import { Review } from './comment';
import { SortType } from '../const';
import { RootState } from '../store/root-reducer';

export interface MainData {
  city: City;
  sort: SortType;
}

export interface AppData {
  offers: Offer[] | [];
  reviews: Review[] | [];
}

export type State = RootState;
