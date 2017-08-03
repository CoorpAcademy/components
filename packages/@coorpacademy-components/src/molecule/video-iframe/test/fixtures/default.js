export default {
  props: {
    type: 'vimeo',
    id: '178430038',
    onPlay: () => console.log('play'),
    onPause: () => console.log('pause'),
    onEnded: () => console.log('ended')
  }
};
