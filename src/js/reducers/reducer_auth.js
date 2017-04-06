import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/auth';

const INITIAL_STATE = {
    loading: false,
    error: false,
    user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS: 
        return { ...state, user: action.user, loading: false };
    case SIGNUP_ERROR: 
        return { ...state, error: true, loading: false };
    default: return state;
  }
};
