import { YouTubeApi } from '../constants/api';

export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH';

const youtubeApi = new YouTubeApi();

export const youTubeSearch = term => async dispatch => {
  const data = await youtubeApi.youTubeSearch(term);
  console.log("youtube data:", data);

  return dispatch({
    type: YOUTUBE_SEARCH,
    payload: data
  });
};
