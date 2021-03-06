export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/not_found',
}

export enum APIRoute {
  Hotels = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum AuthStatus {
  Auth = 'auth',
  NoAuth = 'noAuth',
  Unknown = 'unknown',
}

export enum OfferType {
  Cities = 'cities',
  NearPlaces = 'near-places',
  Favorites = 'favorites',
}

export enum BookmarkButtonType {
  PlaceCard = 'place-card',
  Property = 'property',
}

export enum StringFormat {
  Capitalize,
  CamelCase,
}

export enum DateFormat {
  FullMonthYear = 'MMMM YYYY',
  DigitYearMonthDay = 'YYYY-MM-DD',
}

export enum MapType {
  CitiesMap,
  PropertyMap,
}

export enum SortingType {
  Popular = 'popular',
  PriceLow = 'price: low to high',
  PriceHight = 'price: high to low',
  TopRated = 'top rated first',
}

export enum CityName {
  Paris = 'paris',
  Cologne = 'cologne',
  Brussels = 'brussels',
  Amsterdam = 'amsterdam',
  Hamburg = 'hamburg',
  Dusseldorf = 'dusseldorf',
}
