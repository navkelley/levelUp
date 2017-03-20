/**
  * constant to make request to twitch and youtube results are "data" (will be renamed)
  **/
import axios from 'axios';

export class TwitchApi {
  constructor() {
    this.client = "457ing4rfzq3kh5y0chj63wvmyylb5";
    this.rootUrl = "https://api.twitch.tv/kraken/";
  }

  async twitchSearch(term) {
    try {
      const url = `${this.rootUrl}streams/?game=${term}&client_id=${this.client}&live=true&limit=24`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

export class YouTubeApi {
  constructor() {
    this.key = 'AIzaSyBiZx8Ti_Bajxu-sAFjYHUr-lS4jwReH-0';
    this.rootUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.key}`;
  }

  async youTubeSearch(term) {
    try {
      const url = `${this.rootUrl}&q=${term}&r=json&maxResults=24`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
