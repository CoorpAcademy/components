import {MultiFilterPanelProps} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  showSelectedFilters: true
};

export default {
  props: multiFilterPanelProps
};
