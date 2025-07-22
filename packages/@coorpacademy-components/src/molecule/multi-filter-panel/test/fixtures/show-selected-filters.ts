import {MultiFilterPanelProps} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  showSelectedFilters: true,
  onRemoveSelectedFilter: (filterId: string) => {
    console.log('remove selected filter', filterId);
  }
};

export default {
  props: multiFilterPanelProps
};
