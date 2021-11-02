export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
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

export enum DateFormat {
  FullMonthYear = 'MMMM YYYY',
  DigitYearMonthDay = 'YYYY-MM-DD',
}

export enum MapType {
  CitiesMap = 'cities__map',
  PropertyMap = 'property__map',
}

export enum SortType {
  Popular = 'Popular',
  PriceLow = 'Price: low to high',
  PriceHight = 'Price: high to low',
  TopRated = 'Top rated first',
}
