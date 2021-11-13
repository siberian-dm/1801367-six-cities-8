import { camelCase } from 'lodash';

export const adaptOfferToClient = <T, R>(offer: T): R => {
  const adaptedOffer = Object.entries(offer)
    .reduce(
      (prev, [key, value]) =>  (value !== null && value.constructor === Object)
        ? {...prev, [camelCase(key)]: adaptOfferToClient(value)}
        : {...prev, [camelCase(key)]: value},
      {},
    );
  return adaptedOffer as R;
};
