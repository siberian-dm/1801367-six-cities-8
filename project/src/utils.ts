import dayjs from 'dayjs';

export const calculateRating = (rating: number): string => `${rating / 5 * 100}%`;

export const getHumanizeDate = (date: string): string => dayjs(date).format('YYYY-MM-DD');

export const getHumanizeVisibleDate = (date: string): string => dayjs(date).format('MMMM YYYY');
