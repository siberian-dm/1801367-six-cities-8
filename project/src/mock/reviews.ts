import faker from 'faker';
import { Review } from '../types/comment';

function getReviewMock(index: number): Review {
  return {
    comment: faker.lorem.sentence(20),
    date: String(faker.date.past()),
    id: index,
    rating: faker.datatype.float({min: 1, max: 5, precision: 0.1}),
    user: faker.helpers.randomize([
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
  };
}

export function generateReviews(): Review[] {
  const count = faker.datatype.number({min: 1, max: 10});
  return new Array(count).fill(null).map((_, index) => getReviewMock(index));
}
