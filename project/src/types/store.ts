import { Offer } from './hotel';
import { Review } from './comment';
import { RootState } from '../store/root-reducer';

export enum DataType {
  App = 'APP',
}
export interface AppDataState {
  offers: Offer[] | [];
  reviews: Review[] | [];
}

export type State = RootState;

