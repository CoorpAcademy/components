export default {
  props: {
    title: 'Notifications',
    value: true,
    theme: 'newMooc',
    icon: 'bell', // nom FontAwesome
    type: 'iconswitch',
    onChange: value => console.log('toggle notifications', value)
  }
}; 