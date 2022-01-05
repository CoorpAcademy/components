export default {
  props: {
    bannerKey: 'key_1',
    type: 'error',
    message: 'There was an error while publishing the custom playlist. Please Try again. ',
    temporary: true,
    onEnd: () => console.log('end')
  }
};
