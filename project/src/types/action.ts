import { setCity, setOffers } from '../store/action';

export enum ActionType {
  SetCity = 'main/setCity',
  SetOffers = 'main/setOffers',
}

export type Actions =
  | ReturnType<typeof setCity>
  | ReturnType<typeof setOffers>;
