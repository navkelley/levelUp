import axios from 'axios';

const apiKey = '457ing4rfzq3kh5y0chj63wvmyylb5';
const rootUrl = `https://api.twitch.tv/kraken/channel/${apiKey}`;

export const Twitch_Search = 'Twitch_Search';

export function twitchSearch(term) {
  const url = `${rootUrl}`;
  const request = axios.get(url);
  console.log("Request:", request);

  return {
    type: Twitch_Search,
    payload: request
  };
}
