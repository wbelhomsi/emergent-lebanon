import { of } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, withLatestFrom } from 'rxjs/operators';
import { INIT_ROUTER, CHANGED_ROUTER_STATE } from '../actions/router.actions';
import { noopAction } from '../actions/core.actions';
import { assign } from 'lodash';

const initRouterEpic = (action$, state$) => action$.pipe(
  ofType(INIT_ROUTER),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    action.resolve(action.initState.redirect);
    return of(noopAction());
  })
);

const changedRouterStateEpic = (action$, state$) => action$.pipe(
  ofType(CHANGED_ROUTER_STATE),
  withLatestFrom(state$),
  mergeMap(([action, state]) => {
    localStorage.routerState = JSON.stringify(assign({}, state.router.routerState, {
      modifiedDate: Date.now()
    }));
    return of(noopAction());
  })
);

const routerEpic = combineEpics(initRouterEpic, changedRouterStateEpic);
export default routerEpic;
