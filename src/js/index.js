import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const ISPROD = process.env.NODE_ENV === 'production';

//tool for redux dev
const ENHANCERS = compose(
  applyMiddleware(ReduxPromise, thunk),
  (!ISPROD && window.devToolsExtension ? window.devToolsExtension() : f => f)
);
console.log(process.env.NODE_ENV);

const store = createStore(
  reducers, undefined, ENHANCERS
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app'));
