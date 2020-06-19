import AnalyticsSections from '../../../setup-sections/test/fixtures/analytics';

const {props} = AnalyticsSections;

export default {
  props: {
    title: 'Analytics',
    subtitle: 'Explanation about the analytics section',
    fields: [
      {
        ...props,
        type: 'sections'
      }
    ]
  }
};
