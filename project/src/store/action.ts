import { ActionType, RoomData } from '../types/action';
import { AppOffer } from '../types/app-data';
import { AppRoute, AuthStatus } from '../const';
import { createAction } from '@reduxjs/toolkit';

export const loadOffers = createAction(
  ActionType.loadOffers,
  (offers: AppOffer[]) => ({
    payload: {
      offers,
    },
  }),
);

export const loadRoomDataById = createAction(
  ActionType.loadRoomDataById,
  (roomData: RoomData) => ({
    payload: roomData,
  }),
);

export const setIsRoomDataLoaded = createAction(
  ActionType.setIsRoomDataLoaded,
  (isLoading: boolean) => ({
    payload: isLoading,
  }),
);

export const setAuthStatus = createAction(
  ActionType.setAuthStatus,
  (authStatus: AuthStatus) => ({
    payload: authStatus,
  }),
);

export const setUserEmail = createAction(
  ActionType.setUserEmail,
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
