import Slide from '../../../setup-slide/test/fixtures/default';

const {props} = Slide;

export default {
  props: {
    tabProps: [
      {
        title: '1'
      },
      {
        title: '2'
      },
      {
        title: '3'
      }
    ],
    slides: [props, props, props]
  }
};
