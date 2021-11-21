import { createReducer } from '@reduxjs/toolkit';
import {
  loadNearbyOffersById,
  loadOfferById,
  loadReviewsById,
  setIsPostingReview,
  setIsRoomDataLoaded
} from '../../action';
import { RoomDataState } from '../../../types/store';

const initialState: RoomDataState = {
  offerById: null,
  nearbyOffersById: [],
  reviewsById: [],
  isRoomDataLoaded: false,
  isPostingReview: false,
};

const roomData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferById, (state, action) => {
      const { offer } = action.payload;
      state.offerById = offer;
    })
    .addCase(loadNearbyOffersById, (state, action) => {
      const { offers } = action.payload;
      state.nearbyOffersById = offers;
    })
    .addCase(loadReviewsById, (state, action) => {
      const { reviews } = action.payload;
      state.reviewsById = reviews;
    })
    .addCase(setIsRoomDataLoaded, (state, action) => {
      state.isRoomDataLoaded = action.payload;
    })
    .addCase(setIsPostingReview, (state, action) => {
      state.isPostingReview = action.payload;
    });
});

export default roomData;
