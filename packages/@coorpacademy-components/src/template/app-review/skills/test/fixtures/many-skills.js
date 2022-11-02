import manySkills from '../../../../../organism/review-skills/test/fixtures/many-skills';
import noSkills from '../../../../../organism/review-no-skills/test/fixtures/no-skills';

export default {
  props: {
    'aria-label': 'Review Skills Container',
    title: 'Skills you can revise',
    listSkills: manySkills.props.listSkills,
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    ...noSkills.props
  }
};
