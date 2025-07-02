import defaultProps from './complete';

export default {
  props: {
    ...defaultProps.props,
    badgeUrl: '',
    diplomaUrl: '',
    metrics: {
      ...defaultProps.props.metrics,
      stars: 0,
      totalContents: 10
    }
  }
};
