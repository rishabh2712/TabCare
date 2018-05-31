import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { middleware as reduxPackMiddleware } from 'redux-pack'
import { routerMiddleware } from 'react-router-redux';
import {rootReducer} from './reducers'

export default function configureStore(initialState = {}, history) {
 const logger = createLogger()
 const store = createStore(
  rootReducer,
  applyMiddleware(thunk, reduxPackMiddleware, logger) 
 )
 return store
}