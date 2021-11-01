import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { generateOffers } from './mock/offers';
import { generateReviews } from './mock/reviews';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

const offers = generateOffers();
const reviews = generateReviews();

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
