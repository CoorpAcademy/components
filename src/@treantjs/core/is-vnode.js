import get from 'lodash/fp/get';
import {TYPE} from './vnode';

export default obj =>
  get('type', obj) === TYPE;
