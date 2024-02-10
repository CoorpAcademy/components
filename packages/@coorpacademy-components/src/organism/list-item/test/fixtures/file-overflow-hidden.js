export default {
  props: {
    id: 'default',
    title:
      'very_long_filename_to_test_hidden_overflow_behavior_very_long_filename_to_test_hidden_overflow_behavior_very_long_filename_to_test_hidden_overflow_behavior_.zip',
    buttonLink: {
      type: 'secondary',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        type: 'close'
      },
      onClick: () => console.log('click'),
      customStyle: {
        paddingTop: '12px',
        paddingRight: '24px',
        paddingBottom: '12px',
        paddingLeft: '24px'
      }
    },
    isOverflowHidden: true
  }
};
