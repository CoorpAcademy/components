export default {
  props: {
    title: 'Notifications',
    value: true,
    theme: 'newMooc',
    icon: 'bell',
    type: 'iconswitch',
    onChange: value => console.log('toggle notifications', value)
  }
};
