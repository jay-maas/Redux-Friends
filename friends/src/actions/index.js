import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: res.data.payload
            })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: LOGIN_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START'
export const FETCH_FRIENDS_ERROR = 'FETCH_FRIENDS_ERROR'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'

export const getFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START })
    axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res.data)
            dispatch({ 
                type: FETCH_FRIENDS_SUCCESS,
                payload: res.data
             })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: FETCH_FRIENDS_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START'
export const FETCH_FRIEND_ERROR = 'FETCH_FRIEND_ERROR'
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS'

export const getFriend = friendId => dispatch => {
    dispatch({ type: FETCH_FRIEND_START })
    axiosWithAuth()
        .get(`/api/friends/${friendId}`)
        .then(res => {
            console.log(res.data)
            dispatch({ 
                type: FETCH_FRIEND_SUCCESS,
                payload: res.data
             })
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch({
                type: FETCH_FRIEND_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    
    return axios
        .post('http://localhost:5000/api/register', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            dispatch({
                type: REGISTER_SUCCESS, 
                payload: res.data.payload
            })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: REGISTER_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const UPDATE_START = 'REGISTER_START'
export const UPDATE_ERROR = 'REGISTER_ERROR'
export const UPDATE_SUCCESS = 'REGISTER_SUCCESS'

export const update = ( friendId ,creds ) => dispatch => {
    dispatch({ type: UPDATE_START })
    
    return axiosWithAuth()
        .put(`/api/friends/${friendId}`, creds)
        .then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_SUCCESS, 
                payload: res.data.payload
            })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: UPDATE_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const CAPTURE_FRIEND = 'CAPTURE_FRIEND'

export const captureFriend = friend =>  {
    return { 
        type: CAPTURE_FRIEND,
        payload: friend
    }
}

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START'
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'

export const deleteFriend = friendId => dispatch => {
    dispatch({ type: DELETE_FRIEND_START })
    return axiosWithAuth()
        .delete(`/api/friends/${friendId}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_FRIEND_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}