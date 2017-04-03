import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';


import MainLayout from './components/main_layout';
import Home from './components/home';
import reducers from './reducers';
import YouTubeSearch from './components/youtube/youtube_search';
import TwitchSearch from './components/twitch/twitch_search';
import PunchSearch from './components/punch_search';

const ISPROD = process.env.NODE_ENV === 'production';

//tool for redux dev
const ENHANCERS = compose(
  applyMiddleware(ReduxPromise, thunk),
  (/*!ISPROD &&*/ window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const store = createStore(
  reducers, undefined, ENHANCERS
);

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={MainLayout}>
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
