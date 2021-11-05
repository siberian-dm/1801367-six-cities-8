import { City } from '../../../types/city';
import { SortType } from '../../../const';
import { DataType, State } from '../../../types/store';

export const getCity = (state: State): City => state[DataType.Main].city;

export const getSort = (state: State): SortType => state[DataType.Main].sort;
