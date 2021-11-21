import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppOffer, AppReview } from './app-data';
import { AxiosInstance } from 'axios';
import { State } from './store';


export enum ActionType {
  RedirectToRoute = 'app/redirectToRoute',
  loadOffers = 'data/loadOffers',
  loadRoomDataById = 'data/loadRoomDataById',
  setIsRoomDataLoaded = 'data/setIsRoomDataLoaded',
  setAuthStatus = 'user/setAuthStatus',
  setUserEmail = 'user/setUserEmail',
  RequireLogout = 'user/requireLogout',
}
export interface RoomData {
  offer: AppOffer,
  nearbyOffers: AppOffer[],
  reviews: AppReview[],
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
