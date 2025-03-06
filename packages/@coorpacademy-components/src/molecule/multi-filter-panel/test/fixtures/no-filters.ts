import {MultiFilterPanelProps} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  options: []
};

export default {
  props: multiFilterPanelProps
};
