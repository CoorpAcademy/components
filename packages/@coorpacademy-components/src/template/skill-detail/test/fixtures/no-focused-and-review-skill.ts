import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    description:
      'Conflict management is the skill of handling disagreements constructively through effective communication, active listening, and finding mutually beneficial resolutions. It helps navigate tensions, foster collaboration, and maintain a positive environment by preventing conflicts from escalating.',
    focused: false,
    availableForReview: false
  }
};
