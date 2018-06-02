import { combineReducers } from 'redux';
import {appReducer} from './containers/App/reducer'
import {notifications} from './containers/Notifications/reducer'
import {residents} from './containers/Residents/reducer'

const rootReducer =  combineReducers({
    appReducer,
    notifications,
    residents
});

export default rootReducer

