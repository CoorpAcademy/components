// @flow
import {type Props} from '../../';
import Default from './default';

const {props: parentProps} = Default;

const props: Props = {
  ...parentProps,
  className: 'foo'
};

export default {
  props
};
