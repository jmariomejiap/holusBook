// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import Home from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.
import { set_app_name } from '../../Reducers/Home/HomeAction';

// Connect to redux.
const mapStateToProps = (state: RootState) => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  set_app_name
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
