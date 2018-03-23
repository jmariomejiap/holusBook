// Libaries
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// App Modules
import rootReducer from './combineReducers';

const middleware = applyMiddleware(thunk);

export default function configureStore() {
  const store = createStore(rootReducer, middleware);
  return store;
}
