import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { windowResize } from '../actions/core.actions';
import { getWindowSize } from '../utils';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epics';
import initializeRouter from '../router';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

let debounceTimer;
window.addEventListener('resize', () => {
  if(debounceTimer) {
    clearTimeout(debounceTimer);
  }
  debounceTimer = setTimeout(() => {
    const { width, height } = getWindowSize();
    store.dispatch(windowResize(width, height));
  }, 100);
});
document.addEventListener('beforeunload', () => {
  if(localStorage.routerState) {
    const routerState = JSON.parse(localStorage.routerState);
    routerState.modifiedDate = Date.now();
    localStorage.routerState = JSON.stringify(routerState);
  }
});
initializeRouter(store);

export default store;