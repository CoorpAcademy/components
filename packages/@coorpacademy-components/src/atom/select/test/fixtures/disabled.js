import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    title: 'Propriétés de la marque :',
    disabled: true
  })
};
