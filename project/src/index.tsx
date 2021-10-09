import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { generateOffers } from './mock/offers';

const HOTEL_COUNT = 5;
const hotels = generateOffers(HOTEL_COUNT);

ReactDOM.render(
  <React.StrictMode>
    <App hotels={hotels} />
  </React.StrictMode>,
  document.getElementById('root'));
