import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { generateOffers } from './mock/offers';
import { generateReviews } from './mock/reviews';

const offers = generateOffers();
const reviews = generateReviews();

ReactDOM.render(
  <React.StrictMode>
    <App offers={offers} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
