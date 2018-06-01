import { combineReducers } from 'redux';
import {appReducer} from './containers/App/reducer'
import {notifications} from './containers/Notifications/reducer'

const rootReducer =  combineReducers({
    appReducer,
    notifications
});

export default rootReducer

