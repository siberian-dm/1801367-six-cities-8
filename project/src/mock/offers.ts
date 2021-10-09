import faker from 'faker';
import { Hotel } from '../types/hotel';

function getHotelMock() {
  return {
    id: faker.datatype.uuid(),
    isPremium: faker.datatype.boolean(),
    previewImage: faker.helpers.randomize([
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ]),
    price: faker.datatype.number({min: 80, max: 200}),
    isFavorite: faker.datatype.boolean(),
    rating: faker.datatype.number({min: 10, max: 100, precision: 10}),
    title: faker.helpers.randomize([
      'Beautiful &amp; luxurious apartment at great location',
      'Wood and stone place',
      'Canal View Prinsengracht',
      'Nice, cozy, warm big bed apartment',
    ]),
    type: faker.helpers.randomize([
      'Private room',
      'Apartment',
    ]),
  };
}

export function generateOffers(count: number): Hotel[] {
  return new Array(count).fill(null).map(() => getHotelMock());
}
