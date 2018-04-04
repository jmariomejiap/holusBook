import AppNavigation from '../Navigation/AppNavigation';

export const NavigationRedux = (state: Object, action: any) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};
