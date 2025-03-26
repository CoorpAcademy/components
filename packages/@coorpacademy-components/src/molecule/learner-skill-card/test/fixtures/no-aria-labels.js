import {defaultProps} from './default';

export const noAriaLabelProps = {
  ...defaultProps,
  metrics: {
    content: 89,
    score: 65,
    questionsToReview: 25
  },
  iconColor: '#A32700',
  iconName: 'banana',
  onExploreClick: () => console.log('explore')
};

export default {
  props: noAriaLabelProps
};
