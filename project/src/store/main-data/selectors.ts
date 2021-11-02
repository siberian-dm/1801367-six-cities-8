import { City } from '../../types/city';
import { NameSpace } from '../root-reducer';
import { SortType } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State): City => state[NameSpace.Main].city;

export const getSort = (state: State): SortType => state[NameSpace.Main].sort;
