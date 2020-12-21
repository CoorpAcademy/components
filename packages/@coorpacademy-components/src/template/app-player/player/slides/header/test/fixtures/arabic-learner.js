export default {
  props: {
    type: 'learner',
    content: {
      onClick: () => console.log('onClick learner'),
      title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
      details: 'Basic'
    },
    subcontent: {
      title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعكانت تصاميم مطبوعه</p>',
      details: '2/8'
    },
    lives: {
      count: 3
    }
  }
};
