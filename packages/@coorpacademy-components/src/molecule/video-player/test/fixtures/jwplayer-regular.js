export default {
  props: {
    mimeType: 'application/jwplayer',
    id: 'LisUL8N2',
    width: '100%',
    height: '400px',
    onPlay: () => console.log('onPlay jwplayer'),
    onResume: () => console.log('onResume jwplayer'),
    onPause: () => console.log('onPause jwplayer'),
    onEnded: () => console.log('onEnded jwplayer')
  }
};
