import {createRouter} from '@coorpacademy/redux-router';
import createView from './view';

const routes = [
  {
    path: ':id?',
    view: createView
  }
];

export default createRouter(routes);
