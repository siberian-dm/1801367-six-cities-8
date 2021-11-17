import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { State } from './store';

export enum ActionType {
  RedirectToRoute = 'app/redirectToRoute',
  loadOffers = 'data/loadOffers',
  loadReviews = 'data/loadReviews',
  setAuthStatus = 'user/setAuthStatus',
  RequireLogout = 'user/requireLogout',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
