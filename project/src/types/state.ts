import { City } from './city';
import { Offer } from './hotel';

export interface State {
  city: City;
  offers: Offer[] | [];
}
