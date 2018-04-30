// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import Tour from './index';

import { RootState } from '../../../Redux/rootReducers';
import { Dispatch } from '../../../Redux/types';

// Actions.
import { fetchData, handleRefreshing, handleTourState } from '../../../Reducers/Home/HomeAction';

// Connect to redux.
const mapStateToProps = (state: RootState) => {
  return {
   
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  handleTourState,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tour);
