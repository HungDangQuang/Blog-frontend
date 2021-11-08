import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './components/authentication/Redux/_helpers';

import { App } from './App';

import { configureFakeBackend } from './components/authentication/Redux/_helpers';
configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
