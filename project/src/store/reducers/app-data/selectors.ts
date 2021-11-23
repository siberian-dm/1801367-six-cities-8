import { AppOffer } from '../../../types/app-data';
import { CityName, SortingType, StringFormat } from '../../../const';
import { createSelector } from 'reselect';
import { DataType, State } from '../../../types/store';
import { formatString, sortOffers } from '../../../utils';

export const getOffers = (state: State): AppOffer[] => state[DataType.App].offers;

export const getFavorites = (state: State): AppOffer[] => state[DataType.App].favorites;

export const getIsOffersLoading = (state: State): boolean => state[DataType.App].isOffersLoading;

export const getIsFavoritesLoading = (state: State): boolean => state[DataType.App].isFavoritesLoading;

export const getActiveCity = (state: State): CityName => state[DataType.App].activeCity;

export const getActiveSorting = (state: State): SortingType => state[DataType.App].activeSorting;

export const getOffersByCity = createSelector(
  getOffers,
  getActiveCity,
  (offers, city) => offers.filter((offer) => (
    offer.city.name === formatString(city, StringFormat.Capitalize)),
  ),
);

export const getIsAnyOffersByCity = createSelector(
  getOffersByCity,
  (offers) => offers.length !== 0,
);

export const getSortedOffersByCity = createSelector(
  getOffersByCity,
  getActiveSorting,
  (offers, sorting) => sortOffers(offers, sorting),
);

export const getFavoritesByCity = createSelector(
  getFavorites,
  (offers) => Object.values(CityName)
    .map((cityName) => (
      {
        cityName: cityName,
        offers: offers.filter(({ city }) =>
          city.name === formatString(cityName, StringFormat.Capitalize),
        ),
      }
    ))
    .filter((item) => item.offers.length !== 0),
);
