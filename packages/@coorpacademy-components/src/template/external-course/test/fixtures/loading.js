export default {
  props: {
    name: 'Massive Open Online Course',
    type: 'article',
    url: 'https://fr.wikipedia.org/wiki/Massive_Open_Online_Course',
    quit: {
      label: 'close',
      onClick: () => console.log('close')
    },
    complete: {
      disabled: false,
      label: 'finish',
      onClick: () => console.log('finish')
    },
    warning: {
      label: 'Report an error',
      onClick: () => console.log('Report an error')
    },
    loading: true
  }
};
