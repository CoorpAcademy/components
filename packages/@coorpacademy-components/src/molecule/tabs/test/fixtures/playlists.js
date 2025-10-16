export default {
  props: {
    items: [
      {
        title: 'Playlists by {brand} ',
        count: 34,
        'aria-label': 'All playlists',
        onClick: () => console.log('All playlists'),
        isActive: true
      },
      {
        title: 'Generic playlists',
        count: 23,
        'aria-label': 'Playlists in progress',
        onClick: () => console.log('Playlists in progress'),
        isActive: false
      }
    ]
  }
};
