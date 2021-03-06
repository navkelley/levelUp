import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import MainLayout from './components/main_layout';
import Home from './components/home';
import reducers from './reducers';
import YouTubeSearch from './components/youtube/youtube_search';
import TwitchSearch from './components/twitch/twitch_search';
import PunchSearch from './components/punch_search';
import Account from './components/Account';

const ISPROD = process.env.NODE_ENV === 'production';

//tool for redux dev
const ENHANCERS = compose(
  applyMiddleware(ReduxPromise, thunk, createLogger()),
  (!ISPROD && window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const store = createStore(
  reducers, undefined, ENHANCERS
);

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainLayout}>
        <Route path="login" component={Account} />
        <IndexRoute component={Home} />
        <Route path="/search">
          <Route path="youtube" component={YouTubeSearch} />
          <Route path="twitch" component={TwitchSearch} />
          <IndexRoute component={PunchSearch} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));
