import { AppOffer, AppReview } from './app-data';
import { AuthStatus, CityName, SortingType } from '../const';
import { RootState } from '../store/root-reducer';

export enum DataType {
  App = 'APP',
  User = 'USER',
  Room = 'ROOM',
}

export interface AppDataState {
  activeCity: CityName;
  activeSorting: SortingType;
  offers: AppOffer[] | [];
  favorites: AppOffer[] | [];
  isOffersLoading: boolean;
  isFavoritesLoading: boolean;
}

export interface UserDataState {
  email: string | null;
  authStatus: AuthStatus;
}

export interface RoomDataState {
  offerById: AppOffer | null;
  nearbyOffersById: AppOffer[] | [];
  reviewsById: AppReview[] | [];
  isRoomDataLoading: boolean;
  isPostingReview: boolean;
}

export type State = RootState;
