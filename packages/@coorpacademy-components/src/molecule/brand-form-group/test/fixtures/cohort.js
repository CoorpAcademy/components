import SetupCohort from '../../../setup-slider/test/fixtures/default-cohort';

const {props} = SetupCohort;

export default {
  props: {
    title: 'Slider',
    subtitle: 'Explanation about',
    fields: [
      {
        type: 'sliderCohort',
        ...props
      }
    ]
  }
};
