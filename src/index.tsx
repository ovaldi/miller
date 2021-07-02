import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './theme';
import Router from './router';
import Provider from './provider';

ReactDOM.render(
  <Provider>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
