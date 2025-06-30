export default {
  props: {
    primaryOption: {
      defaultLabel: 'All content',
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
        onClick: () => {
          console.log('skills selected');
        },
        selected: false
      },
      {
        iconName: 'wreath-laurel',
        label: 'Certificates',
        onClick: () => {
          console.log('certificates selected');
        },
        selected: false
      },
      {
        iconName: 'lines-leaning',
        label: 'Playlists',
        onClick: () => {
          console.log('playlists selected');
        },
        selected: false
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
