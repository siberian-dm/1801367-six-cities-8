import { Offer } from '../../../types/hotel';
import { Review } from '../../../types/comment';
import { DataType, State } from '../../../types/store';

export const getOffers = (state: State): Offer[] => state[DataType.App].offers;

export const getReviews = (state: State): Review[] => state[DataType.App].reviews;
