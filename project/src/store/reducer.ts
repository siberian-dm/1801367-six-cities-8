import { Actions, ActionType } from '../types/action';
import { City } from '../types/city';
import { State } from '../types/state';

const initialState: State = {
  city: City.Paris,
  offers: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity:
      return {...state, city: action.payload};
    case ActionType.SetOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
