import { Offer } from './hotel';
import { Review } from './comment';
import { RootState } from '../store/root-reducer';
import { AuthStatus } from '../const';

export enum DataType {
  App = 'APP',
  User = 'USER',
}

export interface AppDataState {
  offers: Offer[] | [];
  reviews: Review[] | [];
  isDataLoaded: boolean;
}

export interface UserDataState {
  email: string | null;
  authStatus: AuthStatus;
}

export type State = RootState;

