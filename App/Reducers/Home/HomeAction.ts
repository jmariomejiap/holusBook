// Types
import { Dispatch, Action } from '../../Redux/types';

// Constants
const SET_APP_NAME = 'home/setAppName';
const TOUR_STATE = 'TOUR_STATE';


export type Actions = {
  SET_APP_NAME: { type: typeof SET_APP_NAME, value: string },
  TOUR_STATE: { type: typeof TOUR_STATE }
};


/**
 * Basic Action Example
 */
export const set_app_name = (value: string): Action => ({ type: SET_APP_NAME, value });

export const handleTourState = (): Action => ({ type: TOUR_STATE });

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

export { SET_APP_NAME, TOUR_STATE };
