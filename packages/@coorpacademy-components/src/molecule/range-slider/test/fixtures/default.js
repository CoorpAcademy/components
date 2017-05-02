export default {
  props: {
    label: 'Time:',
    labelMin: '0',
    labelMax: '∞',
    handle1: {
      step: 1
    },
    handle2: {
      step: 6
    },
    steps: [{
      label: '1mn',
      value: 1
    }, {
      label: '2mn',
      value: 2
    }, {
      label: '3mn',
      value: 3
    }, {
      label: '4mn',
      value: 4
    }, {
      label: '5mn',
      value: 5
    }, {
      label: '6mn',
      value: 6
    }, {
      label: '7mn',
      value: 7
    }, {
      label: '8mn',
      value: 8
    }],
    title: '2mins – 3 hours +',
    onDrag: state => console.log('onDrag', {state}), // eslint-disable-line no-console
    onDragEnd: state => console.log('onDragEnd', {state}) // eslint-disable-line no-console
  }
};
