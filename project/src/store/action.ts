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

export const loadOffers = createAction(
  ActionType.LoadOffers,
  (offers: AppOffer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const loadOfferById = createAction(
  ActionType.LoadOfferById,
  (offer: AppOffer) => ({
    payload: {
      offer,
    },
  }),
);

export const loadNearbyOffersById = createAction(
  ActionType.LoadNearbyOffersById,
  (offers: AppOffer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const loadReviewsById = createAction(
  ActionType.LoadReviewsById,
  (reviews: AppReview[]) => ({
    payload: {
      reviews,
    },
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
