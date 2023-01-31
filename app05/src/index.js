import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import txnReducer from './state/txnReducer';

import App from './App';
import reportWebVitals from './reportWebVitals';

const budgetStore = createStore(txnReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={budgetStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**
 * index.html
 *  |- head
 *  |- body
 *      |- div#root
 *            |- <App />
 */