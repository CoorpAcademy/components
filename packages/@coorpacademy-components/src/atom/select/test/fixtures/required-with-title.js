import defaultsDeep from 'lodash/fp/defaultsDeep';
import required from './required';

export default {
  props: defaultsDeep(required.props, {
    title: 'Marque :'
  })
};
