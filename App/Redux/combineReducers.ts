import { combineReducers } from 'redux';

// Reducers Import
import { NavigationRedux } from './NavigationRedux';

import HomeReducer from '../Reducers/Home/HomeReducer';
// import SecondViewReducer from '../Modules/SecondView/SecondViewReducer';

const objectCombine: any = {
  nav: NavigationRedux,
  home: HomeReducer
};

export default combineReducers(objectCombine);
