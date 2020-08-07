import { from as observableFrom, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { CLOSE_TOAST, removeToast, ADD_TOAST, closeToast } from '../actions/toast.action';
import { wait } from '../utils';
import { noopAction } from '../actions/core.actions';

const addToastEpic = (action$) => action$.pipe(
  ofType(ADD_TOAST),
  mergeMap((action) => {
    if(action.toast.duration) {
      return observableFrom(wait(action.toast.duration, closeToast(action.toast)));
    }
    return of(noopAction());
  })
);

const closeToastEpic = (action$) => action$.pipe(
  ofType(CLOSE_TOAST),
  mergeMap((action) => {
    return observableFrom(wait(410, removeToast(action.toast)));
  })
);

const toastEpic = combineEpics(addToastEpic, closeToastEpic);
export default toastEpic;
