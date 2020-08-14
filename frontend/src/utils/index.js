export const wait = (duration, data) => new Promise((resolve) => setTimeout(resolve.bind(null, data), duration));
