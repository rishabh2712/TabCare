import { handle } from 'redux-pack';
import {LOAD_NOTIFICATIONS} from './actions'

const initialState = {
    isLoading: false,
    error: null,
    foo: null,
  };
  
export function notifications(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
      case LOAD_NOTIFICATIONS:
        return handle(state, action, {
          start: prevState => ({ ...prevState, isLoading: true, error: null, foo: null }),
          finish: prevState => ({ ...prevState, isLoading: false }),
          failure: prevState => ({ ...prevState, error: payload }),
          success: prevState => ({ ...prevState, foo: payload }),
          always: prevState => prevState, // unnecessary, for the sake of example
        });
      default:
        return state;
    }
  }