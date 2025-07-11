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
      selected: true,
      ariaLabel: 'certificates aria label'
    },
    {
      iconName: 'lines-leaning',
      label: 'Playlists',
      value: 'playlists',
      onClick: () => {
        console.log('playlists selected');
      },
      selected: false,
      ariaLabel: 'playlists aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning`,
      value: '5-learning',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 2`,
      value: '5-learning 2',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 2 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 3`,
      value: '5-learning 3',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 3 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 4`,
      value: '5-learning-4',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 4 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 5`,
      value: '5-learning-5',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 5 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 6`,
      value: '5-learning-6',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 6 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 7`,
      value: '5-learning-7',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 7 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 8`,
      value: '5-learning-8',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 8 aria label'
    },
    {
      iconName: 'stopwatch',
      label: `5'learning 9`,
      value: '5-learning-9',
      onClick: () => {
        console.log(`5'learning selected`);
      },
      selected: false,
      ariaLabel: '5 learning 9 aria label'
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
  },
  nextFilterAriaLabel: 'show next filters',
  previousFilterAriaLabel: 'show previous filters'
};
export default {props: filterSelected};
