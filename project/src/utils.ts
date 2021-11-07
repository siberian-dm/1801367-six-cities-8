import dayjs from 'dayjs';
import { DateFormat, SortingType } from './const';
import { Offer } from './types/hotel';

const MAX_STARS = 5;
const MAX_RATING = 100;

export const calculateRating = (rating: number): string => `${rating / MAX_STARS * MAX_RATING}%`;

export const capitalizeString = (string: string): string => `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

export const getHumanizeDate = (date: string, format: DateFormat): string => dayjs(date).format(format);

export const sortOffers = (offers: Offer[], sort: SortingType): Offer[] => {
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

export const isValueInEnum = <T>(
  value: string,
  enumObject: { [key: string]: T },
): boolean => Object.values(enumObject).includes((value as unknown) as T);
