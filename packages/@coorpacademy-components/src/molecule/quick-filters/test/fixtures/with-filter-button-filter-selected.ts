import filterButtonWithTag from '../../../../atom/button-link/test/fixtures/button-tertiary-fa-icon-left-with-tag';
import defaultProps from './default';

export default {
  props: {
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
        selected: false
      },
      {
        iconName: 'wreath-laurel',
        label: 'Certificates',
        value: 'certificates',
        onClick: () => {
          console.log('certificates selected');
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
        iconName: 'book-open',
        label: 'Courses',
        value: 'courses',
        onClick: () => {
          console.log('Courses selected');
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
      },
      {
        iconName: 'circle-play',
        label: 'Podcasts',
        value: 'podcasts',
        onClick: () => {
          console.log('podcast selected');
        },
        selected: false
      },
      {
        iconName: 'file-lines',
        label: 'Documents',
        value: 'documents',
        onClick: () => {
          console.log('documents selected');
        },
        selected: false
      },
      {
        iconName: 'stopwatch',
        label: "5'learning 1",
        value: '5-learning-1',
        onClick: () => {
          console.log(`5'learning selected`);
        },
        selected: false
      },
      {
        iconName: 'stopwatch',
        label: `5'learning 2`,
        value: '5-learning-2',
        onClick: () => {
          console.log(`5'learning selected`);
        },
        selected: false
      },
      {
        iconName: 'stopwatch',
        label: `5'learnin 3`,
        value: '5-learning-3',
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
      }
    ],
    filterButton: {
      ...filterButtonWithTag.props
    }
  }
};
