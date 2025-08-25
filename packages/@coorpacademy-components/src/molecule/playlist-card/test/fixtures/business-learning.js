export default {
  props: {
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
      coursesLabel: '10 courses'
    }
  }
};
