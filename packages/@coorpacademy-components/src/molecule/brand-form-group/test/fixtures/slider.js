import SetupSlider from '../../../setup-slider/test/fixtures/default';

const {props} = SetupSlider;

export default {
  props: {
    title: 'Slider',
    subtitle: 'Explanation about the slider',
    fields: [
      {
        ...props,
        type: 'slider'
      }
    ]
  }
};
