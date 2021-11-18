import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthStatus } from './const';
import { checkAuthAction, fetchOffersAction } from './store/api-action';
import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from './services/api';
import { generateReviews } from './mock/reviews';
import { loadReviews, setAuthStatus } from './store/action';
import { Provider } from 'react-redux';
import { redirect } from './store/middlewares/redirect';
import { rootReducer } from './store/root-reducer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = createAPI(
  () => store.dispatch(setAuthStatus(AuthStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
store.dispatch(loadReviews(generateReviews()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
