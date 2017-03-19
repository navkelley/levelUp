import { YOUTUBE_SEARCH } from '../actions/youtube';

//put videos in state as array for access and mapping 
export default (state = [], action) => {
  const youTubeData = action.payload;
  switch (action.type) {
    case YOUTUBE_SEARCH:
      return { data: youTubeData, isFetched: true };
    default: return state;
  }
};
