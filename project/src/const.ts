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

export enum CardType {
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
