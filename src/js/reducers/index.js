import { combineReducers } from 'redux';
import { reducer as FORM_REDUCER } from 'redux-form';
import YOUTUBE_SEARCH from './reducer_youTube';
import TWITCH_SEARCH from './reducer_twitch';

//combo reducers to work state of app
const rootReducer = combineReducers({
	videos: YOUTUBE_SEARCH,
  streams: TWITCH_SEARCH,
  form: FORM_REDUCER
});

export default rootReducer;
