import manySkills from '../../../../../organism/review-skills/test/fixtures/many-skills';

export default {
  props: {
    'aria-label': 'Review Skills Container',
    title: 'Skills you can revise',
    listSkills: manySkills.props.listSkills,
    isLoading: false,
    isLoadingAriaLabel: 'Review skills container is loading'
  }
};
