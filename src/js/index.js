import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const isProd = process.env.NODE_ENV === 'production';

const enhancers = compose(
  applyMiddleware(ReduxPromise),
  (!isProd && window.devToolsExtension ? window.devToolsExtension() : f => f)
);
console.log(process.env.NODE_ENV);

const store = createStore(
  reducers, undefined, enhancers
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('app'));

//TODO: make all component files uppercase first letter
//redo all const to UPPERCASE