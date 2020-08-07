import { combineReducers } from 'redux';
import coreReducer from './core.reducer';
import routerReducer from './router.reducer';
import toastReducer from './toast.reducer';

const rootReducer = combineReducers({
  core: coreReducer,
  router: routerReducer,
  toast: toastReducer
});

export default rootReducer;
