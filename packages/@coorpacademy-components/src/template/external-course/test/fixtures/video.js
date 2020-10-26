export default {
  props: {
    name: 'Cerise Music Ride',
    type: 'video',
    url: 'https://www.youtube.com/embed/nLMZd05FQKc',
    complete: {
      disabled: true,
      label: 'finish',
      onClick: () => console.log('finish')
    },
    warning: {
      label: 'Report an error',
      onClick: () => console.log('Report an error')
    }
  }
};
