import SetupCohort from '../../../setup-cohort/test/fixtures/default';

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
