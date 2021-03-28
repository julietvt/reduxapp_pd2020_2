import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import mystore from './store';

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
