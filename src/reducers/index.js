import { combineReducers } from 'redux';
import CarReducer from './ListCar';
import userReducer from './user'

export default combineReducers({
    CarReducer, userReducer
})