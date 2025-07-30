export default {
  props: {
    isOpen: true,
    onClick: iconName => console.log(`Icon clicked: ${iconName}`),
    onClose: () => {}
  }
};
