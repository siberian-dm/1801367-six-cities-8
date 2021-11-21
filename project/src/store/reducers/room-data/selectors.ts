import { AppOffer, AppReview } from '../../../types/app-data';
import { DataType, State } from '../../../types/store';

export const getOfferById = (state: State): AppOffer | null => state[DataType.Room].offerById;

export const getNearbyOffersById = (state: State): AppOffer[] | []=> state[DataType.Room].nearbyOffersById;

export const getReviewsById = (state: State): AppReview[] | []=> state[DataType.Room].reviewsById;

export const getIsRoomDataLoaded = (state: State): boolean => state[DataType.Room].isRoomDataLoaded;

export const getIsPostingReview = (state: State): boolean => state[DataType.Room].isPostingReview;
