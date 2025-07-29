import {MultiFilterPanelProps} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  showSelectedFilters: true,
  onRemoveSelectedFilter: () => {
    console.log('remove selected filter');
  }
};

export default {
  props: multiFilterPanelProps
};
