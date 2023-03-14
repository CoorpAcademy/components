export default {
  props: {
    type: 'button',
    useWrapper: false,
    useButtonTag: true,
    onClick: () => console.log('clear all filter'),
    buttonRef: {current: {}},
    'data-for': '123354654656464',
    'data-tooltip-place': 'left',
    'data-tip': true,
    'data-testid': 'x-button',
    'data-name': 'x-button',
    'aria-label': 'x-button-aria-label',
    buttonContentClassName: 'buttonContentClassName',
    style: {
      color: '#334499'
    }
  }
};
