import axios from 'axios';

export class TwitchApi {
  constructor() {
    this.client = '457ing4rfzq3kh5y0chj63wvmyylb5';
    this.rootUrl = 'https://api.twitch.tv/kraken/';
  }

  async twitchSearch(term) {
    try {
      const url = `${this.rootUrl}/search/games?type=suggest&live=true&query=${term.toLowerCase().trim()}&${this.client}`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
}

/*export class YoutubeApi {

}*/