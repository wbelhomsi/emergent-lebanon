import { combineReducers } from 'redux';
import routerReducer from './router.reducer';
import toastReducer from './toast.reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  toast: toastReducer,
});

export default rootReducer;
