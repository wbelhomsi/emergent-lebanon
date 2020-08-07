import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'spin.js/spin.css';
import store from './store';

import AppComponent from './components/app/app.component';
import ToastsComponent from './components/toast/toast.component';

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
    <ToastsComponent />
  </Provider>,
  document.getElementById('root')
);
