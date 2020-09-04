export default {
  props: {
    name: 'Video H5P',
    type: 'video',
    url: 'https://coorpacademy.h5p.com/content/1291025352652664897/embed',
    quit: {
      label: 'close',
      onClick: () => console.log('close')
    },
    warning: {
      label: 'Report an error',
      onClick: () => console.log('Report an error')
    },
    loading: false
  }
};
