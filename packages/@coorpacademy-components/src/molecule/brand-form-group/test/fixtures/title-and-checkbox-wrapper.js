import SetupSlider from '../../../title-and-checkbox-wrapper/test/fixtures/drag-drop-without-title';

const {props} = SetupSlider;

export default {
  props: {
    title: 'Title and checkbox wrapper',
    subtitle: 'Explanation about the slider',
    fields: [
      {
        ...props,
        type: 'titleAndCheckBoxWrapper'
      }
    ]
  }
};
