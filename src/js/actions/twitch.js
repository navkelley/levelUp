import { TwitchApi } from '../constants/api';

export const TWITCH_SEARCH = 'TWITCH_SEARCH';

const twitchApi = new TwitchApi();

//get data from twitch by keyword breakdown promise for handling 
export const twitchSearch = term => async dispatch => {
  const data = await twitchApi.twitchSearch(term);
  const streams = data.streams;

//on action type bring back data named streams
  return dispatch({
    type: TWITCH_SEARCH,
    payload: streams
  });
};
