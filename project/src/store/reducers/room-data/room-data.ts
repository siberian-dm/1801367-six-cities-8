import { createReducer } from '@reduxjs/toolkit';
import { RoomDataState } from '../../../types/store';
import { loadRoomDataById, setIsRoomDataLoaded } from '../../action';

const initialState: RoomDataState = {
  offerById: null,
  nearbyOffersById: [],
  reviewsById: [],
  isRoomDataLoaded: false,
};

const roomData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadRoomDataById, (state, action) => {
      const { offer, nearbyOffers, reviews } = action.payload;

      state.offerById = offer;
      state.nearbyOffersById = nearbyOffers;
      state.reviewsById = reviews;
    })
    .addCase(setIsRoomDataLoaded, (state, action) => {
      state.isRoomDataLoaded = action.payload;
    });
});

export default roomData;
