// @flow
import {type Props} from '../../';
import Default from './default';

const {props: parentProps} = Default;

const props: Props = {
  ...parentProps,
  type: 'link',
  href: '/plop'
};

export default {
  props
};
