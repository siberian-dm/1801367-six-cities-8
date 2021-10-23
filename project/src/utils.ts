import dayjs from 'dayjs';

export const calculateRating = (rating: number): string => `${rating / 5 * 100}%`;

export const capitalizeString = (string: string): string => `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

export const getHumanizeDate = (date: string): string => dayjs(date).format('YYYY-MM-DD');

export const getHumanizeVisibleDate = (date: string): string => dayjs(date).format('MMMM YYYY');
