import dayjs from 'dayjs';
import { DateFormat } from './const';

export const calculateRating = (rating: number): string => `${rating / 5 * 100}%`;

export const capitalizeString = (string: string): string => `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

export const getHumanizeDate = (date: string, format: DateFormat): string => dayjs(date).format(format);
