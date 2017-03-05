import { YOUTUBE_SEARCH } from '../actions/youtube';

export default (state = [], action) => {
  const data = action.payload;
  console.log("in the reducer:", data);
  switch (action.type) {
    case YOUTUBE_SEARCH:
      return data;
    default: return state;
  }
};
