import { v4 as uuidV4 } from 'uuid';

export const ADD_TOAST = 'ADD_TOAST';
export const CLOSE_TOAST = 'CLOSE_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

export const addToast = ({
  component = null, text = 'This is a toast', children = null, duration = 3500, noStyle = false, closeOnClick = true, variant = null,
}) => ({
  type: ADD_TOAST,
  toast: {
    id: uuidV4(), component, text, children, duration, noStyle, closeOnClick, variant,
  },
});
export const closeToast = (toast) => ({
  type: CLOSE_TOAST,
  toast,
});
export const removeToast = (toast) => ({
  type: REMOVE_TOAST,
  toast,
});
