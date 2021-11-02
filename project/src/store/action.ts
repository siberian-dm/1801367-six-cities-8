import { ActionType } from '../types/action';
import { City } from '../types/city';
import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/hotel';
import { Review } from '../types/comment';
import { SortType } from '../const';

export const setOffers = createAction(
  ActionType.SetOffers,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const setReviews = createAction(
  ActionType.SetReviews,
  (reviews: Review[]) => ({
    payload: reviews,
  }),
);

export const setCity = createAction(
  ActionType.SetCity,
  (city: City) => ({
    payload: city,
  }),
);

export const setSort = createAction(
  ActionType.SetSort,
  (sort: SortType) => ({
    payload: sort,
  }),
);
