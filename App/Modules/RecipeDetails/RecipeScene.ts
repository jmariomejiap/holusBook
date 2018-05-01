// Third party.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// App modules
import RecipeDetails from './index';

import { RootState } from '../../Redux/rootReducers';
import { Dispatch } from '../../Redux/types';

// Actions.
import { addFavorite, removeFavorite, handleFavoriteOn, handleResetFavorite } from '../../Reducers/Home/HomeAction';

// Connect to redux.
const mapStateToProps = (state: RootState) => {
  return {
    isFavoriteSelected: state.home.isFavoriteSelected,
    favorites: state.home.favorites,
  }
 };

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addFavorite,
  removeFavorite,
  handleFavoriteOn,
  handleResetFavorite
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
