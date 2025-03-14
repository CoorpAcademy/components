import {defaultsDeep} from 'lodash/fp';
import Checkbox from './checkbox';

const {props} = Checkbox;

export default {
  props: defaultsDeep(props, {
    checkbox: {
      checked: true,
      onChange: value => console.log(value)
    }
  })
};
