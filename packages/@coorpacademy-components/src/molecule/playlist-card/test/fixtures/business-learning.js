export default {
  props: {
    label: 'business-learning-essentials',
    title: 'Business Learning Essentials',
    courseCount: 45,
    progress: 30,
    imgUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    onClick: () => console.log('Business Learning card clicked'),
    locales: {
      playlistTag: 'Playlist',
      coursesLabel: 'courses'
    }
  }
};