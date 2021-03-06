import { AuthStatus } from '../../../const';
import { createReducer } from '@reduxjs/toolkit';
import { requireLogout, setAuthStatus, setUserEmail } from '../../action';
import { UserDataState } from '../../../types/store';

const initialState: UserDataState = {
  email: null,
  authStatus: AuthStatus.Unknown,
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthStatus.NoAuth;
      state.email = null;
    });
});

export default userData;
