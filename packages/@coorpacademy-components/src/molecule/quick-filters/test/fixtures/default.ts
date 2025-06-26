export default {
  props: {
    filterOptions: [
      {
        iconName: 'grid-2',
        label: 'All content',
        onClick: () => {
          console.log('all content selected');
        },
        selected: true
      },
      {
        iconName: 'book-open',
        label: 'Courses',
        onClick: () => {
          console.log('Courses selected');
        },
        selected: false
      },
      {
        iconName: 'stopwatch',
        label: `5'learning`,
        onClick: () => {
          console.log(`5'learning selected`);
        },
        selected: false
      },
      {
        iconName: 'rectangle-history',
        label: 'Interactives',
        onClick: () => {
          console.log('interactives selected');
        },
        selected: false
      },
      {
        iconName: 'circle-play',
        label: 'Videos',
        onClick: () => {
          console.log('videos selected');
        },
        selected: false
      },
      {
        iconName: 'circle-play',
        label: 'Podcasts',
        onClick: () => {
          console.log('podcast selected');
        },
        selected: false
      },
      {
        iconName: 'file-lines',
        label: 'Documents',
        onClick: () => {
          console.log('documents selected');
        },
        selected: false
      }
    ]
  }
};
