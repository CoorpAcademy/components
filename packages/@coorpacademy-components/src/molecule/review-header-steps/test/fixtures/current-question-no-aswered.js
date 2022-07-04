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
        icon: 'no-answer',
        current: true,
        value: '3'
      },
      {
        icon: 'no-answer',
        current: false,
        value: '4'
      },
      {
        icon: 'no-answer',
        current: false,
        value: '5'
      }
    ]
  }
};
