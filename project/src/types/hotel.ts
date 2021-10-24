import { User } from './comment';

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  location: Location;
  name: string;
}

export interface Offer {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface Offers {
  offers: Offer[];
}
