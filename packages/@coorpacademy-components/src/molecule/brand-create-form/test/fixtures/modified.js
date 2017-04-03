// @flow
import {type Props} from '../../';
import Default from './default';

const {props: parentProps} = Default;

const props: Props = {
  ...parentProps,
  field: {
    ...parentProps.field,
    value: 'pouet'
  },
  isModified: true
};

export default {
  props
};
