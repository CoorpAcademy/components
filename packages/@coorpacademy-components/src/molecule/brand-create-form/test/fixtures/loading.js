// @flow
import {type Props} from '../../';
import Default from './default';

const {props: parentProps} = Default;

const props: Props = {
  ...parentProps,
  isModified: true,
  isPending: true,
  submitValue: 'Loading'
};

export default {
  props
};
