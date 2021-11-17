import { AuthStatus } from '../../../const';
import { createReducer } from '@reduxjs/toolkit';
import { requireLogout, setAuthStatus } from '../../action';
import { UserDataState } from '../../../types/store';

const initialState: UserDataState = {
  authStatus: AuthStatus.Unknown,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
    });
});

export default userData;
