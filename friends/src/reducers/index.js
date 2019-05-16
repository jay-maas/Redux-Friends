import {
    LOGIN_START,
    LOGIN_USER_NOT_FOUND,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../actions'

const initialState = {
    error: '',
    loggingIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_USER_NOT_FOUND:
            return {
                ...state,
                logginIn: false,
                error: ''
            }
        case LOGIN_ERROR:
            return {
                ...state,
                logginIn: false,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                logginIn: false,
                error: ''
            }
    }
}

export default reducer