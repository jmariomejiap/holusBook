// Libaries
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';



// App Modules
import rootReducer from './combineReducers';
const newMiddleware = createReactNavigationReduxMiddleware('App', (state: any) => state.nav);


const middleware = applyMiddleware(thunk, newMiddleware); // second param added

export default function configureStore() {
  const store = createStore(rootReducer, middleware);
  return store;
}
