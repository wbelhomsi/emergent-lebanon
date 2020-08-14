import { fetch as whatwgFetch } from 'whatwg-fetch';

const baseFetch = window.fetch || whatwgFetch;

/**
 * @typedef {object} FetchOptions
 * @property {string} method the method to use (get, post, patch...)
 * @property {object} headers the fetch headers to send
 * @property {any} body the fetch body to send
 */

/**
 * fetch a url
 * @param {string} url the url to fetch
 * @param {FetchOptions} options the options of the url to fetch
 * @param {boolean} useAuth whether to add authorization header to request if available (default true)
 */
const fetch = (url, options) => {
  if (options && options.method) {
    // eslint-disable-next-line no-param-reassign
    options.method = options.method.toUpperCase();
  }
  return baseFetch(url, options)
    .then((response) => response);
};

export const jsonParser = async (response) => {
  if (response.ok) {
    return response.json();
  }
  const text = await response.text();
  try {
    const json = JSON.parse(text);
    json.status = response.status;
    return Promise.reject(json);
  } catch (err) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      message: text,
      messageKey: 'OOPS',
      status: response.status,
    });
  }
};

const tryJSON = (body) => {
  try {
    return JSON.parse(body);
  } catch (err) {
    return body;
  }
};

/**
 * intended to be used as follows: fetch(url, options).then(notOkRejecter('json', 'text'))
 * @param {string} okBodyType the body type to return in case `response.ok` : 'json', 'blob' or 'text' set to null to return the response without body consumption, set to undefined to try 'json' and if it fails 'text'
 * @param {string} errorBodyType the body type to return in case `!response.ok` : 'json', 'blob' or 'text' set to null to return the response without body consumption, set to undefined to try 'json' and if it fails 'text'
 * @param {boolean} returnBody if true the returned function returns only the body else it returns { status, headers, body }
 * @returns {function} function to be used in the then of promise after the fetch
 * @property {function} body same as self but the function it returns returns just the body
 */
const notOkRejecter = (okBodyType, errorBodyType, returnBody) => (response) => {
  if (response.ok) {
    if (okBodyType === null) {
      return response;
    }
    return response[okBodyType || 'text']()
      .then((body) => {
        // eslint-disable-next-line no-param-reassign
        body = (okBodyType ? body : tryJSON(body));
        if (returnBody) {
          if (body instanceof Object) {
            // eslint-disable-next-line no-param-reassign
            body.$status = response.status;
          }
          return body;
        }
        return {
          headers: response.headers,
          status: response.status,
          body,
        };
      });
  }
  if (errorBodyType === null) {
    return Promise.reject(response);
  }
  return response[errorBodyType || 'text']()
    .then((body) => {
      // eslint-disable-next-line no-param-reassign
      body = (errorBodyType ? body : tryJSON(body));
      if (returnBody) {
        if (body instanceof Object) {
          // eslint-disable-next-line no-param-reassign
          body.$status = response.status;
        }
        return Promise.reject(body);
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        headers: response.headers,
        status: response.status,
        body,
      });
    });
};
notOkRejecter.body = (okBodyType, errorBodyType) => (
  notOkRejecter(okBodyType, errorBodyType, true)
);

/**
 * @function
 * intended to be used as follows: fetch(url, options).then(rejectNotOk)
 * @property {function} body same as self but returns just the body
 * @description default notOkRejecter i.e. try json body, try json error
 */
const rejectNotOk = notOkRejecter();
rejectNotOk.body = notOkRejecter(undefined, undefined, true);

export {
  notOkRejecter,
  rejectNotOk,
};
export default fetch;
export {
  fetch,
};
