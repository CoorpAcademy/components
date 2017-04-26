// @flow
import {type Props} from '../../';
import Default from './default';

const {props: parentProps} = Default;

const props: Props = {
  ...parentProps,
  field: {
    ...parentProps.field,
    error: 'Something wrong.'
  }
};

export default {
  props
};
