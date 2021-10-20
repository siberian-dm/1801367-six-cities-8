import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { generateOffers } from './mock/offers';

const OFFER_COUNT = 5;
const offers = generateOffers(OFFER_COUNT);

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>,
  document.getElementById('root'));
