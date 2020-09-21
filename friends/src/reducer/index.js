import {combineReducers} from 'redux'
import friendReducer from './friendReducer'
import LoginReducer from './loginReducer'

export const rootReducer = combineReducers({friendReducer, LoginReducer})

