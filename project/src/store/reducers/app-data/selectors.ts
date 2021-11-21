import { AppOffer } from '../../../types/app-data';
import { CityName, SortingType, StringFormat } from '../../../const';
import { createSelector } from 'reselect';
import { DataType, State } from '../../../types/store';
import { formatString, sortOffers } from '../../../utils';

export const getOffers = (state: State): AppOffer[] => state[DataType.App].offers;

export const getIsDataLoaded = (state: State): boolean => state[DataType.App].isDataLoaded;

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
