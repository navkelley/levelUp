import { TwitchApi } from '../constants/api';

export const TWITCH_SEARCH = 'TWITCH_SEARCH';

const twitchApi = new TwitchApi();

export const twitchSearch = term => async dispatch => {
  const data = await twitchApi.twitchSearch(term);

  return dispatch({
    type: TWITCH_SEARCH,
    data
  });
};
