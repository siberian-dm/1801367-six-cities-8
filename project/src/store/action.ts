import { ActionType } from '../types/action';
import { AppRoute, AuthStatus } from '../const';
import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/hotel';
import { Review } from '../types/comment';

export const loadOffers = createAction(
  ActionType.loadOffers,
  (offers: Offer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const loadReviews = createAction(
  ActionType.loadReviews,
  (reviews: Review[]) => ({
    payload: {
      reviews,
    },
  }),
);

export const setAuthStatus = createAction(
  ActionType.setAuthStatus,
  (authStatus: AuthStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
