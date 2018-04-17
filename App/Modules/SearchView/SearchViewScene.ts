// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import SearchView from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.
import { handleSearchInput } from "../../Reducers/Home/HomeAction";

// Connect to redux.
const mapStateToProps = (state: RootState) => { 
  return {
    allData: state.home.allData,
    searchInput: state.home.searchInput,
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  handleSearchInput,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
