import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

document.addEventListener( "DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<Root store={store}/>);
});