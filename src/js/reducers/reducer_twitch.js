import { TWITCH_SEARCH } from '../actions/twitch';

//put videos in state as array for access and mapping 
export default (state = [], action) => {
  const twitchData = action.payload;
  switch (action.type) {
    case TWITCH_SEARCH:
      return { data: twitchData, isFetched: true };
    default: return state;
  }
};
