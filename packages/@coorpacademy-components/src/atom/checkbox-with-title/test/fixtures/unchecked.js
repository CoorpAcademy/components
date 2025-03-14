export default {
  props: {
    title: 'Create badge',
    checked: false,
    onChange: value => console.log(value),
    icon: {iconName: 'minus', iconColor: 'white', preset: 's'}
  }
};
