// Types
import { Dispatch, Action } from '../../Redux/types';
import callApi from '../../Utils/apiCaller';
import filterCategory from '../../Utils/filterCategory';

// Constants
const SET_APP_NAME = 'home/setAppName';
const TOUR_STATE = 'TOUR_STATE';
const UPDATE_SOUP_DATA = 'UPDATE_SOUP_DATA';
const UPDATE_APPETIZER_DATA = 'UPDATE_APPETIZER_DATA';
const UPDATE_DINNER_DATA = 'UPDATE_DINNER_DATA';
const UPDATE_SALAD_DATA = 'UPDATE_SALAD_DATA';
const UPDATE_DESSERT_DATA = 'UPDATE_DESSERT_DATA';


export type Actions = {
  SET_APP_NAME: { type: typeof SET_APP_NAME, value: string },
  TOUR_STATE: { type: typeof TOUR_STATE }
};

interface RecipeContent {
  [key: string]: any;
}


/**
 * Basic Action Example
 */
export const set_app_name = (value: string): Action => ({ type: SET_APP_NAME, value });

export const handleTourState = (): Action => ({ type: TOUR_STATE });

export const updateSoupData = (arrRecipes: Array<RecipeContent> ): Action => ({ type: UPDATE_SOUP_DATA, value: arrRecipes });

export const updateAppetizersData = (arrRecipes: Array<RecipeContent> ): Action => ({ type: UPDATE_APPETIZER_DATA, value: arrRecipes });

export const updateDinnerData = (arrRecipes: Array<RecipeContent> ): Action => ({ type: UPDATE_DINNER_DATA, value: arrRecipes });

export const updateSaladData = (arrRecipes: Array<RecipeContent> ): Action => ({ type: UPDATE_SALAD_DATA, value: arrRecipes });

export const updateDessertData = (arrRecipes: Array<RecipeContent> ): Action => ({ type: UPDATE_DESSERT_DATA, value: arrRecipes });


export const fetchData = () => {
  return(dispatch: Dispatch) => {
    return callApi('https://s3-us-west-2.amazonaws.com/holus-book/holus_data.json')
      .then(data => {
        const soups = filterCategory(data, 'soup');
        const appetizers = filterCategory(data, 'appetizer');
        const dinners = filterCategory(data, 'dinner');
        const salads = filterCategory(data, 'salad');
        const desserts = filterCategory(data, 'dessert');
        
        dispatch(updateSoupData(soups));
        dispatch(updateAppetizersData(appetizers));
        dispatch(updateDinnerData(dinners));
        dispatch(updateSaladData(salads));
        dispatch(updateDessertData(desserts));
      });

  }
}

// region reduxExample
/**
 * redux-thunk Example
 */
// export const set_app_name = (value: string) => {
//   return (dispatch: Dispatch) => {
//     dispatch({ type: SET_APP_NAME, value });
//   }
// };
// endregion reduxExample

export {
  SET_APP_NAME,
  TOUR_STATE,
  UPDATE_SOUP_DATA,
  UPDATE_APPETIZER_DATA,
  UPDATE_DINNER_DATA,
  UPDATE_SALAD_DATA,
  UPDATE_DESSERT_DATA,
};
