import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import routerEpic from './router.epic';
import toastEpic from './toast.epic';

const epics = [routerEpic, toastEpic];

const rootEpic = (action$, store$, dependencies) => combineEpics(...epics)(action$, store$, dependencies).pipe(
  catchError((error, source) => {
    console.error('error in epics');
    console.error(error);
    return source;
  }),
);

export default rootEpic;
