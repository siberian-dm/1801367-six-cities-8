export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardType {
  CityPlace = 'CITY_PLACE',
  NearPlace = 'NEAR_PLACE',
  Favorite = 'FAVORITE',
}

export enum DateFormat {
  FullMonthYear = 'MMMM YYYY',
  DigitYearMonthDay = 'YYYY-MM-DD',
}
