import { NameSpace } from '../root-reducer';
import { Offer } from '../../types/hotel';
import { Review } from '../../types/comment';
import { State } from '../../types/state';

export const getOffers = (state: State): Offer[] => state[NameSpace.App].offers;

export const getReviews = (state: State): Review[] => state[NameSpace.App].reviews;
