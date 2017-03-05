import { YouTubeApi } from '../constants/api';

export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH';

const youtubeApi = new YouTubeApi();

export const youTubeSearch = term => async dispatch => {
  const data = await youtubeApi.youTubeSearch(term);
  const videos = data.items;
  console.log("youtube data:", videos);

  return dispatch({
    type: YOUTUBE_SEARCH,
    payload: videos
  });
};
