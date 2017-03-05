import { combineReducers } from 'redux';
import YOUTUBE_SEARCH from './reducer_youtube';
import TWITCH_SEARCH from './reducer_twitch';

const rootReducer = combineReducers({
	videos: YOUTUBE_SEARCH,
  twitch: TWITCH_SEARCH
});

export default rootReducer;
