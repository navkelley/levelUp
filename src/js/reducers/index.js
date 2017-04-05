import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import YOUTUBE_SEARCH from './reducer_youTube';
import TWITCH_SEARCH from './reducer_twitch';

//combo reducers to work state of app
const rootReducer = combineReducers({
	videos: YOUTUBE_SEARCH,
  streams: TWITCH_SEARCH,
  form: formReducer
});

export default rootReducer;
