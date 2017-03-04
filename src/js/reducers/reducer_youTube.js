import { YouTube_Search } from '../actions/youtube';

export default (state = {}, action) => {
  const data = action.payload;
  console.log("in the reducer:", data);
  switch (action.type) {
    case YouTube_Search:
      return [data,...state];
    default: return state;
  }
};
