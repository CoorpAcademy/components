import {defaultsDeep} from 'lodash/fp';
import Default from './teams';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    onMenuOpen: () => console.log('menu Open'),
    onMenuClose: () => console.log('menu Close')
  })
};
