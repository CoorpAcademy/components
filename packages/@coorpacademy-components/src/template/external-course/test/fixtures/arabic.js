export default {
  props: {
    name: '<p align="right"> وضع الناء كانت تصاميم مطبوعه</p>',
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
    loading: false
  }
};
