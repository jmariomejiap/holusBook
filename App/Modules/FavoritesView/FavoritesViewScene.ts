// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import FavoritesView from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.
// import { set_app_name, handleTourState } from '../../Reducers/Home/HomeAction';

// Connect to redux.
const mapStateToProps = (state: RootState) => {
  return {
    favorites: state.home.favorites,
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesView);
