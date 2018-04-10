// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import Home from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.
import { set_app_name, handleTourState, fetchData } from '../../Reducers/Home/HomeAction';

// Connect to redux.
const mapStateToProps = (state: RootState) => {
  return {
    categoriesData: state.home.categoriesData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  set_app_name,
  fetchData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
