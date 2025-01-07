export default {
  props: {
    size: 'responsive',
    options: {selectionMode: 'multi', isSelected: true},
    'data-name': 'default-button',
    'aria-label': 'aria button',
    faIcon: 'bullseye-pointer',
    onClick: () => console.log('click')
  }
};
