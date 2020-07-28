import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

import { reducer } from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store = {store}>
    <Router><App /></Router>
  </Provider>,
  rootElement
);