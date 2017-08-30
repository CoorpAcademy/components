export default {
  props: {
    mimeType: 'application/vimeo',
    id: '178430038',
    width: '100%',
    height: '400px',
    onPlay: () => console.log('onPlay vimeo'),
    onResume: () => console.log('onResume vimeo'),
    onPause: () => console.log('onPause vimeo'),
    onEnded: () => console.log('onEnded vimeo')
  }
};
