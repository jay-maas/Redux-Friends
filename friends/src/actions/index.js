import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_USER_NOT_FOUND = 'LOGIN_USER_NOT_FOUND'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}