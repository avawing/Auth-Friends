import {combineReducers} from 'redux'
import friendReducer from './friendReducer'
import loginReducer from './loginReducer'

export const rootReducer = combineReducers({friendReducer, loginReducer})

