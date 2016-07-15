import get from 'lodash/fp/get';
import {TYPE} from './create-widget';

export default obj =>
  get('type', obj) === TYPE;
