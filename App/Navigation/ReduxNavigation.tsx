import * as React from 'react';
import * as ReactNavigation from 'react-navigation';
import { connect } from 'react-redux';
import AppNavigation from './AppNavigation';

import { RootState } from '../Redux/rootReducers';

import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';




// Here is our redux-aware our smart component
function ReduxNavigation(props: any) {
  const addListener = createReduxBoundAddListener("App");

  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener,
  });

  return <AppNavigation navigation={navigation} />;
}

const mapStateToProps = (state: RootState) => ({ nav: state.nav });

export default connect(mapStateToProps)(ReduxNavigation);
