import { createReducer } from '@reduxjs/toolkit';
import { RoomDataState } from '../../../types/store';
import {
  setIsPostingReview,
  setIsRoomDataLoading,
  setNearbyOffersById,
  setOfferById,
  setReviewsById
} from '../../action';

const initialState: RoomDataState = {
  offerById: null,
  nearbyOffersById: [],
  reviewsById: [],
  isRoomDataLoading: false,
  isPostingReview: false,
};

const roomData = createReducer(initialState, (builder) => {
  builder
    .addCase(setOfferById, (state, action) => {
      const { offer } = action.payload;
      state.offerById = offer;
    })
    .addCase(setNearbyOffersById, (state, action) => {
      const { offers } = action.payload;
      state.nearbyOffersById = offers;
    })
    .addCase(setReviewsById, (state, action) => {
      const { reviews } = action.payload;
      state.reviewsById = reviews;
    })
    .addCase(setIsRoomDataLoading, (state, action) => {
      state.isRoomDataLoading = action.payload;
    })
    .addCase(setIsPostingReview, (state, action) => {
      state.isPostingReview = action.payload;
    });
});

export default roomData;
