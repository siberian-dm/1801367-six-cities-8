import { Offer } from './hotel';
import { Review } from './comment';
import { RootState } from '../store/root-reducer';
import { AuthorizationStatus } from '../const';

export enum DataType {
  App = 'APP',
  User = 'USER',
}

export interface AppDataState {
  offers: Offer[] | [];
  reviews: Review[] | [];
  isDataLoading: boolean;
}

export interface UserDataState {
  authorizationStatus: AuthorizationStatus;
}

export type State = RootState;

