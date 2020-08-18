const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = require("../actions");

const initialState = {
    loggedIn: false,
    isLogging: false,
    errors: ''
}

function LoginReducer(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST :
            return {...state, isLogging: true}
        
        case LOGIN_SUCCESS :
            return {...state, loggedIn: true, isLogging: false}
        
        case LOGIN_FAILURE :
            return {...state, isLogging: false, errors: action.payload}
    }
}

export default LoginReducer