import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/_helpers';

import App from './App';

import { configureFakeBackend } from './Redux/_helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
