import { TWITCH_SEARCH } from '../actions/twitch';

export default (state = [], action) => {
  const data = action.payload;
  switch (action.type) {
    case TWITCH_SEARCH:
      return [data, ...state];
    default: return state;
  }
};
