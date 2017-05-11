import {prepareApp} from '@coorpacademy/appster';
import createReducer from './reducers';
import createRoutes from './routes';

// @TODO import translate

// eslint-disable-next-line import/prefer-default-export
export const create = options => prepareApp(createReducer, createRoutes, options);
