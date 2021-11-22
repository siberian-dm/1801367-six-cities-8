import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from './store';


export enum ActionType {
  SetActiveCity = 'app/setActiveCity',
  SetActiveSorting = 'app/setActiveSorting',
  RedirectToRoute = 'app/redirectToRoute',
  SetOffers = 'data/setOffers',
  SetOfferById = 'data/setOfferById',
  SetNearbyOffersById = 'data/setNearbyOffersById',
  SetReviewsById = 'data/setReviewsById',
  SetIsDataLoaded = 'data/setIsDataLoaded',
  SetIsRoomDataLoaded = 'data/setIsRoomDataLoaded',
  SetIsPostingReview = 'data/setIsPostingReview',
  SetAuthStatus = 'user/setAuthStatus',
  SetUserEmail = 'user/setUserEmail',
  RequireLogout = 'user/requireLogout',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
