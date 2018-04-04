// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import RecipeDetails from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.

// Connect to redux.
const mapStateToProps = ({ }) => { };

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch);

export default connect(null, mapDispatchToProps)(RecipeDetails);
