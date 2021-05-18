import AnalyticsSections from '../../../setup-sections/test/fixtures/analytics';

const {props} = AnalyticsSections;

export default {
  props: {
    title: 'Analytics',
    subtitle: 'Explanation about the analytics section',
    fields: [
      {
        submitValue: 'Go To Analytics',
        href: `/sso/connect?redirect-to=%2Fanalytics`,
        type: 'link'
      },
      {
        ...props,
        type: 'sections'
      }
    ]
  }
};
