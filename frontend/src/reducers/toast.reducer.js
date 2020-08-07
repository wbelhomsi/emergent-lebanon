import { ADD_TOAST, CLOSE_TOAST, REMOVE_TOAST } from '../actions/toast.action';
import { map, filter } from 'lodash';

const toastReducer = (
  state = {
    toasts: []
  },
  action,
) => {
  switch(action.type) {
    case ADD_TOAST:
      return Object.assign({}, state, { toasts: state.toasts.concat([action.toast]) });
    case CLOSE_TOAST:
      return Object.assign({}, state, { toasts: map(state.toasts, (toast) => {
        if(toast.id === action.toast.id) {
          return Object.assign({}, toast, { hide: true });
        }
        return toast;
      }) });
    case REMOVE_TOAST:
      return Object.assign({}, state, { toasts: filter(state.toasts, (toast) => toast.id !== action.toast.id) });
    default:
      return state;
  }
};

export default toastReducer;
