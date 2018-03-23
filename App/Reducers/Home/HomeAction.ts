// Types
import { Dispatch, Action } from '../../Redux/types';

// Constants
const SET_APP_NAME = 'home/setAppName';

export type Actions = {
  SET_APP_NAME: { type: typeof SET_APP_NAME, value: string }
};


/**
 * Basic Action Example
 */
export const set_app_name = (value: string): Action => ({ type: SET_APP_NAME, value });

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

export { SET_APP_NAME };
