import AppNavigation from '../Navigation/AppNavigation';

// const initialState = AppNavigation.router.getStateForAction(AppNavigation.router.getActionForPathAndParams('App'));
const initialState: any = null;

export const NavigationRedux = (state = initialState, action: any) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};
