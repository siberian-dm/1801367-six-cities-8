import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const placeCards = [
  {
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    isFavorite: false,
    rating: 80,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 80,
    title: 'Wood and stone place',
    type: 'Private room',
  },
  {
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    isFavorite: false,
    rating: 80,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    isPremium: false,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    isFavorite: false,
    rating: 100,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    isFavorite: true,
    rating: 80,
    title: 'Wood and stone place',
    type: 'Private room',
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App placeCount={placeCards.length} placeCards={placeCards} />
  </React.StrictMode>,
  document.getElementById('root'));
