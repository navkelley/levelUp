import axios from 'axios';

const clientId = '457ing4rfzq3kh5y0chj63wvmyylb5';
const rootUrl = `https://api.twitch.tv/kraken/channel/${clientId}`;

export const TWITCH_SEARCH = 'TWITCH_SEARCH';

export function twitchSearch(term) {
  const url = `${rootUrl}`;
  const request = axios.get(url);
  console.log("Request:", request);

  return {
    type: TWITCH_SEARCH,
    payload: request
  };
}
