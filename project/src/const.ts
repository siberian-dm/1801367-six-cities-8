export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Offers = '/:city/offers/:sorting',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth,
  NoAuth,
  Unknown,
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
  CitiesMap = 'cities__map',
  PropertyMap = 'property__map',
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
