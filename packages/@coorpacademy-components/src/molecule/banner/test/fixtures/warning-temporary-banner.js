export default {
  props: {
    bannerKey: 'key_1',
    type: 'warning',
    message: 'Custom playlist successfully published ',
    temporary: true,
    onEnd: () => console.log('end')
  }
};
