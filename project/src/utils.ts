import dayjs from 'dayjs';
import { AppOffer } from './types/app-data';
import { camelCase, capitalize, random } from 'lodash';
import { DateFormat, SortingType, StringFormat } from './const';

const MAX_STARS = 5;
const MAX_RATING = 100;

export const calculateRating = (rating: number): string => `${rating / MAX_STARS * MAX_RATING}%`;

export const formatString = (value: string, format: StringFormat): string => {
  switch (format) {
    case StringFormat.CamelCase:
      return camelCase(value);
    case StringFormat.Capitalize:
      return capitalize(value);
  }
};

export const formatDate = (date: string, format: DateFormat): string => dayjs(date).format(format);

export const sortOffers = (offers: AppOffer[], sort: SortingType): AppOffer[] => {
  switch (sort) {
    case SortingType.Popular:
      return offers;
    case SortingType.PriceHight:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortingType.PriceLow:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortingType.TopRated:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }
};

export const getRandomArrayItem = <T>(array: T[]): T => {
  const randomIndex = random(array.length - 1);

  return array[randomIndex];
};
