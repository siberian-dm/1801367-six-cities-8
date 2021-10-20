interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface City {
  location: Location;
  name: string;
}

interface Host {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export interface Offer {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
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

export interface offerType {
  [key: string]: string;
}
