import {QuickFiltersProps} from '../../types';
import {COLORS} from '../../../../variables/colors';
import defaultProps from './default';
import noFilterSelected from './few-filter-with-filter-button-no-selected';

const filterSelected: QuickFiltersProps = {
  primaryOption: {
    ...defaultProps.props.primaryOption,
    defaultSelected: false
  },
  filterOptions: [
    ...noFilterSelected.props.filterOptions,
    {
      iconName: 'wreath-laurel',
      label: 'Certificates',
      value: 'certificates',
      onClick: () => {
        console.log(`certificates selected`);
      },
      selected: true
    },
    {
      iconName: 'lines-leaning',
      label: 'Playlists',
      value: 'playlists',
      onClick: () => {
        console.log('playlists selected');
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning`,
      value: '5-learning',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 2`,
      value: '5-learning 2',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 3`,
      value: '5-learning 3',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 4`,
      value: '5-learning-4',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 5`,
      value: '5-learning-5',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 6`,
      value: '5-learning-6',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 7`,
      value: '5-learning-7',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 8`,
      value: '5-learning-8',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 9`,
      value: '5-learning-9',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false
    }
  ],
  filterButton: {
    label: 'Filters',
    'aria-label': 'open-filters-modal',
    'data-name': 'open-filters-modal',
    tag: {
      label: '4',
      customStyle: {
        color: COLORS.white,
        backgroundColor: COLORS.cm_primary_blue
      }
    }
  }
};
export default {props: filterSelected};
