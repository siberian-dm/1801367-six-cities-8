export interface AppUser {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface AppReview {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: AppUser;
}

export interface OfferLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  location: OfferLocation;
  name: string;
}

export interface AppOffer {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: AppUser;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: OfferLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}
