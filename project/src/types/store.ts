import { AppOffer, AppReview } from './app-data';
import { AuthStatus } from '../const';
import { RootState } from '../store/root-reducer';

export enum DataType {
  App = 'APP',
  User = 'USER',
  Room = 'ROOM',
}

export interface AppDataState {
  offers: AppOffer[] | [];
  isDataLoaded: boolean;
}

export interface UserDataState {
  email: string | null;
  authStatus: AuthStatus;
}

export interface RoomDataState {
  offerById: AppOffer | null;
  nearbyOffersById: AppOffer[] | [];
  reviewsById: AppReview[] | [];
  isRoomDataLoaded: boolean;
}

export type State = RootState;
