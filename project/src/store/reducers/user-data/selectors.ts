import { AuthStatus } from '../../../const';
import { DataType, State } from '../../../types/store';

export const getAuthStatus = (state: State): AuthStatus => state[DataType.User].authStatus;
