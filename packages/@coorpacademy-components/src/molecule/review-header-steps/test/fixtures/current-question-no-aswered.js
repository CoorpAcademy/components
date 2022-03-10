export default {
  props: {
    steps: [
      {
        icon: 'right',
        current: false,
        value: '1'
      },
      {
        icon: 'wrong',
        current: false,
        value: '2'
      },
      {
        icon: null,
        current: true,
        value: '3'
      },
      {
        icon: null,
        current: false,
        value: '4'
      },
      {
        icon: null,
        current: false,
        value: '5'
      }
    ]
  }
};