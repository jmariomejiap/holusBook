import AppNavigation from '../Navigation/AppNavigation';

export const NavigationRedux = (state: Object, action: String) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};
