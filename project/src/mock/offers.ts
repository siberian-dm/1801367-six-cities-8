import faker from 'faker';
import { Offer } from '../types/hotel';

function getHotelMock(index: number) {
  return {
    bedrooms: faker.datatype.number({min: 1, max: 5}),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: faker.lorem.sentence(20),
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: faker.helpers.randomize([
      {
        avatarUrl: 'img/avatar-angelina.jpg',
        id: 2,
        isPro: faker.datatype.boolean(),
        name: 'Angelina',
      },
      {
        avatarUrl: 'img/avatar-max.jpg',
        id: 3,
        isPro: faker.datatype.boolean(),
        name: 'Max',
      },
    ]),
    id: index,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: faker.datatype.number({min: 1, max: 5}),
    previewImage: faker.helpers.randomize([
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
    ]),
    price: faker.datatype.number({min: 80, max: 200}),
    rating: faker.datatype.float({min: 1, max: 5, precision: 0.1}),
    title: faker.helpers.randomize([
      'Beautiful & luxurious apartment at great location',
      'Wood and stone place',
      'Canal View Prinsengracht',
      'Nice, cozy, warm big bed apartment',
    ]),
    type: faker.helpers.randomize([
      'apartment',
      'room',
      'house',
      'hotel',
    ]),
  };
}

export function generateOffers(count: number): Offer[] {
  return new Array(count).fill(null).map((_, index) => getHotelMock(index));
}
