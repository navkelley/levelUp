import { YouTubeApi } from '../constants/api';

export const YOUTUBE_SEARCH = 'YOUTUBE_SEARCH';

const youtubeApi = new YouTubeApi();

//get data from twitch by keyword breakdown promise for handling 
export const youTubeSearch = term => async dispatch => {
  const data = await youtubeApi.youTubeSearch(term);
  const videos = data.items;

//on action type bring back data named videos 
  return dispatch({
    type: YOUTUBE_SEARCH,
    payload: videos
  });
};
