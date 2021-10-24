import dayjs from 'dayjs';
import { DateFormat } from './const';

const MAX_STARS = 5;
const MAX_RATING = 100;

export const calculateRating = (rating: number): string => `${rating / MAX_STARS * MAX_RATING}%`;

export const capitalizeString = (string: string): string => `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

export const getHumanizeDate = (date: string, format: DateFormat): string => dayjs(date).format(format);
