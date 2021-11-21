import { AppOffer } from '../../../types/app-data';
import { DataType, State } from '../../../types/store';

export const getOffers = (state: State): AppOffer[] => state[DataType.App].offers;

export const getIsDataLoaded = (state: State): boolean => state[DataType.App].isDataLoaded;
