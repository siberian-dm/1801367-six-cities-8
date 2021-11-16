import { StringFormat } from '../const';
import { formatString } from '../utils';

export const adaptDataToClient = <T, R>(data: T): R => {
  const adaptedData = Object.entries(data)
    .reduce(
      (prev, [key, value]) =>  (value !== null && value.constructor === Object)
        ? {...prev, [formatString(key, StringFormat.CamelCase)]: adaptDataToClient(value)}
        : {...prev, [formatString(key, StringFormat.CamelCase)]: value},
      {},
    );
  return adaptedData as R;
};
