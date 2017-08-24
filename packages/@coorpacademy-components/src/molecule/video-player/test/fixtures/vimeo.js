export default {
  props: {
    mimeType: 'application/vimeo',
    id: '178430038',
    width: '100%',
    height: '400px',
    onPlay: () => console.log('onPlay'),
    onPause: () => console.log('onPause'),
    onEnded: () => console.log('onEnded')
  }
};
