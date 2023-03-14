import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    type: 'link',
    href: '/plop',
    isLinkDisabled: true
  })
};
