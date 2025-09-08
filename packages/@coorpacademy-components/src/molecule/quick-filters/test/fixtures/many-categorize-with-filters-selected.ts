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
    {
      iconName: 'shapes',
      label: 'Skills',
      value: 'skills',
      onClick: () => {
        console.log('skills selected');
      },
      selected: false,
      ariaLabel: 'skills filter aria label'
    },
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
    ...noFilterSelected.props.filterOptions
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
  previousFilterAriaLabel: 'show previous filters',
  filterOptionsAriaLabel: 'filter options list aria label'
};
export default {props: filterSelected};
