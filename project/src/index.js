import React from 'react';
import ReactDOM from 'react-dom';
import Route from 'app/Route';
import * as serviceWorker from './serviceWorker';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
