export default {
  props: {
    mimeType: 'application/faurecia-vr',
    url: 'https://learning-lab-forvr-preprod.app.corp/Experiences/WebGL/1?player=true',
    width: '1000px',
    height: '700px',
    onPlay: () => console.log('onPlay faurecia-vr'),
    onResume: () => console.log('onResume faurecia-vr'),
    onPause: () => console.log('onPause faurecia-vr'),
    onEnded: () => console.log('onEnded faurecia-vr')
  }
};
