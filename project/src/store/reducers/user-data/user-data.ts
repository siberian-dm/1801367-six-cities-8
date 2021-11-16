import { AuthorizationStatus } from '../../../const';
import { createSlice } from '@reduxjs/toolkit';
import { DataType, UserDataState } from '../../../types/store';

const initialState: UserDataState = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userData = createSlice({
  name: DataType.User,
  initialState: initialState,
  reducers: {
    setAuthorizationStatus(state, action) {
      state.authorizationStatus = action.payload;
    },
    requireLogout(state) {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
  },
});

const { actions, reducer } = userData;

export const { setAuthorizationStatus, requireLogout } = actions;

export default reducer;
