export default {
  props: {
    type: 'microlearning',
    content: {
      onClick: () => console.log('onClick microlearning'),
      title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>'
    },
    lives: {
      count: 1
    }
  }
};
