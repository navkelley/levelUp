import { TWITCH_SEARCH } from '../actions/twitch';

export default (state = [], action) => {
  const data = action.payload;
  console.log("in the reducer-twitch:", data);
  switch (action.type) {
    case TWITCH_SEARCH:
      return data;
    default: return state;
  }
};