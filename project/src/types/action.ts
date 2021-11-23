import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from './store';


export enum ActionType {
  SetActiveCity = 'app/setActiveCity',
  SetActiveSorting = 'app/setActiveSorting',
  RedirectToRoute = 'app/redirectToRoute',
  SetOffers = 'data/setOffers',
  SetFavorites = 'data/setFavorites',
  SetOfferById = 'data/setOfferById',
  SetNearbyOffersById = 'data/setNearbyOffersById',
  SetReviewsById = 'data/setReviewsById',
  SetIsOffersLoading = 'data/setIsOffersLoading',
  SetIsFavoritesLoading = 'data/setIsFavoritesLoading',
  SetIsRoomDataLoading = 'data/setIsRoomDataLoading',
  SetIsPostingReview = 'data/setIsPostingReview',
  SetAuthStatus = 'user/setAuthStatus',
  SetUserEmail = 'user/setUserEmail',
  RequireLogout = 'user/requireLogout',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
