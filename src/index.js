import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/store';
import Root from './components/root';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  // ReactDOM.render(<Root store={ store } />, root);
  ReactDOM.render(<App />, root);
}); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
