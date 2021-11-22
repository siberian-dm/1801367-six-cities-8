import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AppOffer, AppReview } from './app-data';
import { AxiosInstance } from 'axios';
import { State } from './store';


export enum ActionType {
  SetActiveCity = 'app/setActiveCity',
  SetActiveSorting = 'app/setActiveSorting',
  RedirectToRoute = 'app/redirectToRoute',
  LoadOffers = 'data/loadOffers',
  LoadOfferById = 'data/loadOfferById',
  LoadNearbyOffersById = 'data/loadNearbyOffersById',
  LoadReviewsById = 'data/loadReviewsById',
  SetIsDataLoaded = 'data/setIsDataLoaded',
  SetIsRoomDataLoaded = 'data/setIsRoomDataLoaded',
  SetIsPostingReview = 'data/setIsPostingReview',
  SetAuthStatus = 'user/setAuthStatus',
  SetUserEmail = 'user/setUserEmail',
  RequireLogout = 'user/requireLogout',
}

export interface RoomData {
  offer: AppOffer,
  nearbyOffers: AppOffer[],
  reviews: AppReview[],
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
