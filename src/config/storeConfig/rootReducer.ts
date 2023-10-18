import {AnyAction, combineReducers} from '@reduxjs/toolkit';
import {APP_UTILITY, FEED} from '@src/constants';
import {appUtilityReducer, feedReducer} from '@src/modules';

/*
  Combine Store for all module and create single object
 */
const appReducer = combineReducers({
  [APP_UTILITY]: appUtilityReducer,
  [FEED]: feedReducer,
  // [USER]: userReducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: AnyAction,
) => {
  // For Logout
  // if (action.type === 'USER_LOGOUT') {
  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

export default rootReducer;
