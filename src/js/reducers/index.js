import { combineReducers } from 'redux';
import YouTubeReducer from './reducer_youTube';

const rootReducer = combineReducers({
	youTube: YouTubeReducer
});

export default rootReducer;
