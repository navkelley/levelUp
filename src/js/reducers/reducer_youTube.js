import { YouTube_Search } from '../actions/youtube';

export default function (state = [], action) {
  switch (action.type) {
  case YouTube_Search:
    return [action.payload.data];
  }
	console.log("action recieved:", action);
	return state;
}
