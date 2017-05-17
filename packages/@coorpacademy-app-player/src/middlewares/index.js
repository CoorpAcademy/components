import map from 'lodash/fp/map';
import apiMockMiddleware from './api-mock';

export default options => map(createMiddleware => createMiddleware(options))([apiMockMiddleware]);
