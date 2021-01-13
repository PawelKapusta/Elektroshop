import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import store from './store/index';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
