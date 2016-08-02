import get from 'lodash/fp/get';
import {TYPE} from './widget';

export default obj =>
  get('type', obj) === TYPE;
