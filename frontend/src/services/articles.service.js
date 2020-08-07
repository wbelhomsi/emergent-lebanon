import { fetch, rejectNotOk } from './fetch.service';
import _ from 'lodash';

export const fetchExampleSrvc = (pageNb) => {
  return fetch('http://localhost:8000/fetchExample/' + pageNb, {
    method: 'get',
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(rejectNotOk.body)
}