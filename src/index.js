import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory';


// Create redux store with history

const history = createHistory();
const initialState = {}
const store = configureStore(initialState, history)
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render (
  <Provider store={store}>
   <Router>
     <App />
   </Router>
  </Provider>,
  MOUNT_NODE
)

registerServiceWorker();
