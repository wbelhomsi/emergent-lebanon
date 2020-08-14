import { fetch, rejectNotOk } from './fetch.service';

export const fetchExampleSrvc = (pageNb) => fetch(`http://localhost:8000/fetchExample/${pageNb}`, {
  method: 'get',
  headers: {
    'content-type': 'application/json',
  },
})
  .then(rejectNotOk.body);
