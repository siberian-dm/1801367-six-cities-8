import { ActionType } from '../types/action';
import { AppOffer, AppReview } from '../types/app-data';
import {
  AppRoute,
  AuthStatus,
  CityName,
  SortingType
} from '../const';
import { createAction } from '@reduxjs/toolkit';

export const setActiveCity = createAction(
  ActionType.SetActiveCity,
  (city: CityName) => ({
    payload: city,
  }),
);

export const setActiveSorting = createAction(
  ActionType.SetActiveSorting,
  (sorting: SortingType) => ({
    payload: sorting,
  }),
);

export const setOffers = createAction(
  ActionType.SetOffers,
  (offers: AppOffer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const setOfferById = createAction(
  ActionType.SetOfferById,
  (offer: AppOffer) => ({
    payload: {
      offer,
    },
  }),
);

export const setNearbyOffersById = createAction(
  ActionType.SetNearbyOffersById,
  (offers: AppOffer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const setReviewsById = createAction(
  ActionType.SetReviewsById,
  (reviews: AppReview[]) => ({
    payload: {
      reviews,
    },
  }),
);

export const setIsDataLoaded = createAction(
  ActionType.SetIsDataLoaded,
  (isDataLoaded: boolean) => ({
    payload: isDataLoaded,
  }),
);

export const setIsRoomDataLoaded = createAction(
  ActionType.SetIsRoomDataLoaded,
  (isRoomDataLoaded: boolean) => ({
    payload: isRoomDataLoaded,
  }),
);

export const setIsPostingReview = createAction(
  ActionType.SetIsPostingReview,
  (isPostingReview: boolean) => ({
    payload: isPostingReview,
  }),
);

export const setAuthStatus = createAction(
  ActionType.SetAuthStatus,
  (authStatus: AuthStatus) => ({
    payload: authStatus,
  }),
);

export const setUserEmail = createAction(
  ActionType.SetUserEmail,
  (email: string) => ({
    payload: email,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
