import {
    LOGIN_START,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_ERROR,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIEND_START,
    FETCH_FRIEND_ERROR,
    FETCH_FRIEND_SUCCESS,
    REGISTER_START,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
    UPDATE_START,
    UPDATE_ERROR,
    UPDATE_SUCCESS,
    CAPTURE_FRIEND,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS
} from '../actions'

const initialState = {
    error: '',
    loggingIn: false,
    friends: [],
    fetchingFriends: false,
    friend: null,
    fetchingFriend: false,
    registering: false,
    updating: false,
    captureFriend: '',
    deleting: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_ERROR:
            return {
                ...state,
                logginIn: false,
                error: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                logginIn: false,
                error: ''
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: ''
            }
        case FETCH_FRIENDS_ERROR:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                error: '',
                friends: action.payload
            }
            // FriendViewPage
        case FETCH_FRIEND_START:
            return {
                ...state,
                fetchingFriend: true,
                error: ''
            }
        case FETCH_FRIEND_ERROR:
            return {
                ...state,
                fetchingFriend: false,
                error: action.payload
            }
        case FETCH_FRIEND_SUCCESS:
            return {
                ...state,
                fetchingFriend: false,
                error: '',
                friend: action.payload
            }
        case REGISTER_START:
            return {
                ...state,
                registering: true,
                error: ''
            }
        case REGISTER_ERROR:
            return {
                ...state,
                registering: false,
                error: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                error: ''
            }
        case UPDATE_START:
            return {
                ...state,
                updating: true,
                error: ''
            }
        case UPDATE_ERROR:
            return {
                ...state,
                updating: false,
                error: action.payload
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                updating: false,
                error: ''
            }
        case CAPTURE_FRIEND:
            return {
                ...state,
                capturedFriend: action.payload
            }
        case DELETE_FRIEND_START:
            return {
                ...state,
                deleting: true,
            }
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                deleting: false
            }
        default:
            return state
    }
}

export default reducer