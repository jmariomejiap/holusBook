import * as React from 'react';
import { View, StatusBar } from 'react-native';

import { Dispatch } from './Redux/types';

import ReduxNavigation from './Navigation/ReduxNavigation';
import { connect } from 'react-redux';

class RootContainer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    );
  }
}
// Wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(null, mapDispatchToProps)(RootContainer);
