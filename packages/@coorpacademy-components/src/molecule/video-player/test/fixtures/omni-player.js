export default {
  props: {
    mimeType: 'application/omniPlayer',
    id: '5e429de5be444d66709af632',
    width: '400px',
    height: '343px',
    onPlay: () => console.log('onPlay omniPlayer'),
    onResume: () => console.log('onResume omniPlayer'),
    onPause: () => console.log('onPause omniPlayer'),
    onEnded: () => console.log('onEnded omniPlayer')
  }
};
