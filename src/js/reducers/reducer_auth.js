import { SIGNUP,
     SIGNUP_SUCCESS, 
     SIGNUP_ERROR,
     SIGNUP_CONTACT,
     SIGNUP_CONTACT_ERROR,
     SIGNUP_CONTACT_SUCCESS
  } from '../actions/auth';

const INITIAL_STATE = {
    loading: false,
    error: false,
    message: null,
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
    case SIGNUP_CONTACT: 
      return { ...state, loading: true };
    case SIGNUP_CONTACT_SUCCESS: 
      return { ...state, user: action.name, message: action.message };
    case SIGNUP_CONTACT_ERROR:
      return { ...state, message: action.message, error: true };
    default: return state;
  }
};
