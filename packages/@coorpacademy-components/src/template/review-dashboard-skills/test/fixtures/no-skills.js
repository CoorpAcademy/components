import reviewPresentation from '../../../../atom/review-presentation/test/fixtures/default';
import reviewSkills from '../../../app-review/skills/test/fixtures/no-skills';

export default {
  props: {
    'aria-label': 'Review Skills Template',
    reviewPresentation: reviewPresentation.props,
    reviewSkills: reviewSkills.props
  }
};
