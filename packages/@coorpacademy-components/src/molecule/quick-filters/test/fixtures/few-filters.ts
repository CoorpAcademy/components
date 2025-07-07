export default {
  props: {
    primaryOption: {
      defaultLabel: 'All content',
      defaultValue: 'all-content',
      defaultIconName: 'grid-2',
      defaultSelected: false,
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
        selected: true
      },
      {
        iconName: 'wreath-laurel',
        label: 'Certificates',
        value: 'certificates',
        onClick: () => {
          console.log('certificates selected');
        },
        selected: false
      },
      {
        iconName: 'lines-leaning',
        label: 'Playlists',
        value: 'playlists',
        onClick: () => {
          console.log('playlists selected');
        },
        selected: false
      }
    ],
    filterButton: {
      label: 'Filters',
      'aria-label': 'open-filters-modal',
      'data-name': 'open-filters-modal',
      icon: {
        position: 'left',
        faIcon: {name: 'sliders', size: 14, color: '#7D7D7D'}
      }
    }
  }
};
