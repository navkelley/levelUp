import axios from 'axios';
import { notify } from 'react-notify-toast';
import { reset } from 'redux-form';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

export const SIGNUP_CONTACT = 'SIGNUP_CONTACT';
export const SIGNUP_CONTACT_ERROR = 'SIGNUP_CONTACT_ERROR';
export const SIGNUP_CONTACT_SUCCESS = 'SIGNUP_CONTACT_SUCCESS';


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
};

export const signupContact = values => dispatch => {
    const { name, email } = values;
    dispatch({
        type: SIGNUP_CONTACT
    }); 
    return axios.post('/api/contact', { name, email })
        .then(res => {
            dispatch({
                type: SIGNUP_CONTACT_SUCCESS,
                name: res.data.name,
                message: res.data.message
            });
            dispatch(reset('contact'));
            return notify.show('You are added to the list!', 'success', 5000);
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_CONTACT_ERROR,
                message: err.response.error
            });
            notify.show(`Oops! ${err.response.error}`, 'error', 5000);
        });
};
