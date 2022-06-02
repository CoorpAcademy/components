import reviewPresentation from '../../../../atom/review-presentation/test/fixtures/default';
import reviewSkills from '../../../../organism/review-skills/test/fixtures/many-skills';

export default {
  props: {
    'aria-label': 'Review Skills Template',
    reviewPresentation: reviewPresentation.props,
    reviewSkills: reviewSkills.props
  }
};
