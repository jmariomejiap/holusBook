// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import ListRecipes from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.

// Connect to redux.
const mapStateToProps = (state: RootState) => { 
  return {
    soups: state.home.soupData,
    appettizers: state.home.soupData,
    dinner: state.home.dinnerData,
    salads: state.home.saladData,
    desserts: state.home.dessertData,
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListRecipes);
