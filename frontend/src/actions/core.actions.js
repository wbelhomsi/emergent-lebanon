export const NOOP_ACTION = 'NOOP_ACTION';
export const WINDOW_RESIZE = 'WINDOW_RESIZE';

export const noopAction = () => ({
  type: NOOP_ACTION
});

export const windowResize = (width, height) => ({
  type: WINDOW_RESIZE, width, height
});
