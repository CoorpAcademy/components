import {QuickFiltersProps} from '../../types';

const defaultProps: QuickFiltersProps = {
  primaryOption: {
    defaultLabel: 'All content',
    defaultValue: 'all-content',
    defaultIconName: 'grid-2',
    defaultSelected: true,
    onDefaultClick: () => {
      console.log('default All content clicked');
    }
  },
  filterOptions: [
    {
      iconName: 'shapes',
      label: 'Skills',
      value: 'skills',
      onClick: () => {
        console.log('skills selected');
      },
      selected: false
    },
    {
      iconName: 'book-open',
      label: 'Courses',
      value: 'courses',
      onClick: () => {
        console.log('Courses selected');
      },
      selected: false
    },
    {
      label: `5'learning`,
      iconName: 'stopwatch',
      value: '5-learning',
      selected: false,
      onClick: () => {
        console.log(`5'learning selected`);
      }
    },
    {
      iconName: 'rectangle-history',
      label: 'Interactives',
      value: 'interactives',
      onClick: () => {
        console.log('interactives selected');
      },
      selected: false
    },
    {
      iconName: 'circle-play',
      label: 'Videos',
      value: 'videos',
      onClick: () => {
        console.log('videos selected');
      },
      selected: false
    }
  ]
};
export default {props: defaultProps};
