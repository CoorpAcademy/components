import FilterChipProps from '../../../../organism/filter-chip/test/fixtures/no-selected';
import {MultiFilterPanelProps} from '../../prop-types';
import {multiFilterPanelProps as defaultProps} from './default';

const multiFilterPanelProps: MultiFilterPanelProps = {
  ...defaultProps,
  options: [
    {
      type: 'chip',
      options: FilterChipProps.props
    }
  ]
};

export default {
  props: multiFilterPanelProps
};
