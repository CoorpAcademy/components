export default {
  props: {
    label: 'mastering-art-learning',
    title: 'Mastering the Art of Learning',
    courseCount: 78,
    progress: 65,
    imgUrl: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    onClick: () => console.log('Playlist card clicked'),
    locales: {
      playlistTag: 'Playlist',
      coursesLabel: 'courses'
    }
  }
};