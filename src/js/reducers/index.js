import { combineReducers } from 'redux';
import YouTube_Search from './reducer_youtube';
import Twitch_Search from './reducer_twitch';

const rootReducer = combineReducers({
	youTube: YouTube_Search,
  twitch: Twitch_Search
});

export default rootReducer;
