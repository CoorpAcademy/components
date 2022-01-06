export default {
  props: {
    bannerKey: 'key_1',
    type: 'success',
    message: 'Custom playlist successfully published ',
    temporary: true,
    onEnd: () => console.log('end')
  }
};
