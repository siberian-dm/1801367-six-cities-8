import { City, OfferLocation } from './app-data';

export interface AuthInfo {
  ['avatar_url']: string;
  email: string;
  id: number;
  ['is_pro']: boolean;
  name: string;
  token: string;
}

export interface ServerUser {
  ['avatar_url']: string;
  id: number;
  ['is_pro']: boolean;
  name: string;
}

export interface ServerOffer {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: ServerUser;
  id: number;
  images: string[];
  ['is_favorite']: boolean;
  ['is_premium']: boolean;
  location: OfferLocation;
  ['max_adults']: number;
  ['preview_image']: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface ServerReview {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: ServerUser;
}
