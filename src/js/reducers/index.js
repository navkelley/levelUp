import { combineReducers } from 'redux';
import YOUTUBE_SEARCH from './reducer_youTube';
import TWITCH_SEARCH from './reducer_twitch';

//combo reducers to work state of app
const rootReducer = combineReducers({
	videos: YOUTUBE_SEARCH,
  streams: TWITCH_SEARCH
});

export default rootReducer;
