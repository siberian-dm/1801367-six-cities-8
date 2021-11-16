import { AuthorizationStatus } from '../../../const';
import { DataType, State } from '../../../types/store';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[DataType.User].authorizationStatus;
