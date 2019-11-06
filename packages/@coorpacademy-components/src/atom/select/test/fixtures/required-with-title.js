import {defaultsDeep} from 'lodash/fp';
import required from './required';

export default {
  props: defaultsDeep(required.props, {
    title: 'Marque :'
  })
};
