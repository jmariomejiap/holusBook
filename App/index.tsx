// Third party.
import * as React from 'react';
import { Provider } from 'react-redux';

// Store.
import setupStore from './Redux/setupStore';
const store = setupStore();

// App component.
import RootContainer from './RootContainer';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
