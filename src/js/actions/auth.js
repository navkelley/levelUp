import axios from 'axios';
import { notify } from 'react-notify-toast';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const signupUser = values => dispatch => {
    const { email, username, password } = values;
    dispatch({
        type: SIGNUP
    });
    return axios.post('/api/register', { email, username, password })
      .then(res => {
          notify.show('Registration Successful! You can now save videos or streams!', 'success', 5000);
          return dispatch({
              type: SIGNUP_SUCCESS,
              user: res.data.user
            });
      })
      .catch(err => {
          dispatch({
              type: SIGNUP_ERROR
          });
        notify.show(`Oops! ${err.response.data.error} Please use a different one.`, 'error', 5000);
      });
}