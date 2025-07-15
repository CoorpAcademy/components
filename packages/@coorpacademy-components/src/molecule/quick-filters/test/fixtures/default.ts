import {QuickFiltersProps} from '../../types';

const defaultProps: QuickFiltersProps = {
  primaryOption: {
    defaultLabel: 'All content',
    defaultValue: 'all-content',
    defaultIconName: 'grid-2',
    defaultSelected: true,
    defaultAriaLabel: 'default filter icon',
    onDefaultClick: () => {
      console.log('default All content clicked');
    }
  },
  nextFilterAriaLabel: 'show next filters',
  previousFilterAriaLabel: 'show previous filters',
  filterOptionsAriaLabel: 'filters options list aria label',
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
      iconName: 'book-open',
      label: 'Courses',
      value: 'courses',
      onClick: () => {
        console.log('Courses selected');
      },
      selected: false,
      ariaLabel: 'courses filter aria label'
    },
    {
      label: `5'learning`,
      iconName: 'stopwatch',
      value: '5-learning',
      selected: false,
      onClick: () => {
        console.log(`5'learning selected`);
      },
      ariaLabel: '5 learning aria label'
    },
    {
      iconName: 'rectangle-history',
      label: 'Interactives',
      value: 'interactives',
      onClick: () => {
        console.log('interactives selected');
      },
      selected: false,
      ariaLabel: 'interactives aria label'
    },
    {
      iconName: 'circle-play',
      label: 'Videos',
      value: 'videos',
      onClick: () => {
        console.log('videos selected');
      },
      selected: false,
      ariaLabel: 'videos aria label'
    }
  ]
};
export default {props: defaultProps};
