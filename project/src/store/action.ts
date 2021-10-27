import { ActionType } from '../types/action';
import { City } from '../types/city';
import { Offer } from '../types/hotel';

export const setCity = (city: City) => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

export const setOffers = (offers: Offer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);
