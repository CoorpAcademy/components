// @flow
import {type Props} from '../../';

const props: Props = {
  color: '#ffffff',
  href: '#',
  centered: false,
  disabled: false,
  submitValue: 'Foo',
  onClick: () => console.log('click on foo') // eslint-disable-line no-console
};

export default {
  props
};
