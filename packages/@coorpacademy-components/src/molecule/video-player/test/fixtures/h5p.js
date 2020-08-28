export default {
  props: {
    mimeType: 'application/h5p',
    url: 'https://coorpacademy.h5p.com/content/1291025352652664897/embed',
    width: '1000px',
    height: '700px',
    onPlay: () => console.log('onPlay h5p'),
    onResume: () => console.log('onResume h5p'),
    onPause: () => console.log('onPause h5p'),
    onEnded: () => console.log('onEnded h5p')
  }
};