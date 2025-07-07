import {COLORS} from '../../../../variables/colors';
import {QuickFiltersProps} from '../../types';
import defaultProps from './default';

const noFilterSelected: QuickFiltersProps = {
  ...defaultProps.props,
  filterOptions: [
    ...defaultProps.props.filterOptions,
    {
      label: 'Podcasts',
      iconName: 'microphone-lines',
      value: 'podcasts',
      selected: false,
      onClick: () => {
        console.log('podcast selected');
      }
    },
    {
      label: 'Documents',
      iconName: 'file-lines',
      value: 'documents',
      selected: false,
      onClick: () => {
        console.log('documents selected');
      }
    }
  ],
  filterButton: {
    label: 'Filters',
    'aria-label': 'open-filters-modal',
    'data-name': 'open-filters-modal',
    icon: {
      position: 'left',
      faIcon: {name: 'sliders', size: 14, color: COLORS.neutral_500}
    },
    customStyle: {
      borderRadius: '12px'
    }
  }
};

export default {props: noFilterSelected};
