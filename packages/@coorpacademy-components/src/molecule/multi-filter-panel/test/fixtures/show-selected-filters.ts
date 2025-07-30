import {MultiFilterPanelProps} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  onRemoveSelectedFilter: (label: string) => {
    console.log('remove selected filter', label);
  }
};

export default {
  props: multiFilterPanelProps
};
