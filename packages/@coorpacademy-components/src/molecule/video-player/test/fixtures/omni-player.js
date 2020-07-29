export default {
  props: {
    mimeType: 'application/omniPlayer',
    id: 'c6a552f0-f00a-5da6-83ac-8446eeb58790',
    width: '100%',
    height: '343px',
    onPlay: () => console.log('onPlay omniPlayer'),
    onResume: () => console.log('onResume omniPlayer'),
    onPause: () => console.log('onPause omniPlayer'),
    onEnded: () => console.log('onEnded omniPlayer')
  }
};
