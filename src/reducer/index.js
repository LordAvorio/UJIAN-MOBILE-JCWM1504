import {combineReducers} from 'redux'

import userReducer from './userReducer'
import covidReducer from './covidReducer'

const allReducer = combineReducers({
    userReducer,
    covidReducer
})

export default allReducer