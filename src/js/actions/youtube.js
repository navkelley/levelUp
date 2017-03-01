import axios from 'axios';

const apiKey = 'AIzaSyBiZx8Ti_Bajxu-sAFjYHUr-lS4jwReH-0';
const rootUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}`;

export const YouTube_Search = 'Youtube_Search';

export function youTubeSearch(term) {
	const url = `${rootUrl}&q=${term}&r=json`;
	const request = axios.get(url);
	console.log("Request:", request);

	return {
		type: YouTube_Search,
		payload: request
	};
}
