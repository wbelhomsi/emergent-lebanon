import { map, filter } from 'lodash';
import { initializeRouter as initializeRouterMaa, HASH_MAA_HISTORY_TYPE } from 'react-router-maa';
import { changedRouterState, initRouter } from '../actions/router.actions';

const defaultPage = 'explore';
const parseUrl = (url) => {
  const urlSegments = map(filter(url.split(/\//gmi), (seg) => seg), (seg) => decodeURIComponent(seg));
  if (!urlSegments[0]) {
    return {
      redirect: { page: defaultPage },
    };
  }
  const page = urlSegments[0].trim().toLowerCase();
  switch (page) {
    case defaultPage:
      return {
        page,
      };
    default:
      return {
        redirect: { page: defaultPage },
      };
  }
};

const toUrl = (state) => `/${encodeURIComponent(state.page.toLowerCase() || defaultPage)}`;

const initializeRouter = (store) => initializeRouterMaa(parseUrl, toUrl, null, (state, position, isInit) => {
  store.dispatch(changedRouterState(state, position, isInit));
}, (initState) => new Promise((resolve) => {
  store.dispatch(initRouter(initState, resolve));
}), 10000, '', {}, HASH_MAA_HISTORY_TYPE);

export default initializeRouter;
