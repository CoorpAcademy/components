export default {
  props: {
    size: 'responsive',
    options: {selectionMode: 'single'},
    'data-name': 'default-button',
    'aria-label': 'aria button',
    faIcon: 'bullseye-pointer',
    onClick: () => console.log('click')
  }
};
