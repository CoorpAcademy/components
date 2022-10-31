import noSkills from '../../../../../organism/review-skills/test/fixtures/no-skills';

export default {
  props: {
    'aria-label': 'Review Skills Container',
    title: 'Skills you can revise',
    listSkills: [],
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading',
    ...noSkills.props
  }
};
