// @flow
import {type Props} from '../../';
import Default from './default';

const {props: parentProps} = Default;

const props: Props = {
  ...parentProps,
  centered: true
};

export default {
  props
};
