import {MultiFilterPanelProps, SelectedFilter} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  onRemoveSelectedFilter: (filterItem: SelectedFilter) => {
    console.log('remove selected filter', filterItem);
  }
};

export default {
  props: multiFilterPanelProps
};
