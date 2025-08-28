export default {
  props: {
    type: 'playlist',
    label: 'business-learning-essentials',
    title: 'Business Learning Essentials',
    progress: 30,
    coverImages: [
      {
        type: 'video'
      }
    ],
    onClick: () => console.log('Business Learning card clicked'),
    locales: {
      playlistTag: 'Playlist',
      coursesLabel: '<b>10</b> courses'
    }
  }
};
