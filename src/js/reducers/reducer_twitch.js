import { TWITCH_SEARCH } from '../actions/twitch';

export default (state = [], action) => {
  const twitchData = action.payload;
  switch (action.type) {
    case TWITCH_SEARCH:
      return twitchData;
    default: return state;
  }
};
