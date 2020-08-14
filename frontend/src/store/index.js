import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import initializeRouter from '../router';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
);
epicMiddleware.run(rootEpic);

document.addEventListener('beforeunload', () => {
  if (localStorage.routerState) {
    const routerState = JSON.parse(localStorage.routerState);
    routerState.modifiedDate = Date.now();
    localStorage.routerState = JSON.stringify(routerState);
  }
});
initializeRouter(store);

export default store;
