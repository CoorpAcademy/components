import cardDefault from '../../../../molecule/skill-card/test/fixtures/default';

const listSkills = [
  {...cardDefault.props, skillTitle: 'Digital communication', isCustom: false},
  {...cardDefault.props, skillTitle: 'Creativity and innovation', isCustom: false},
  {...cardDefault.props, skillTitle: 'Agility', isCustom: false},
  {...cardDefault.props, skillTitle: 'Sustainable thinking', isCustom: false},
  {...cardDefault.props, skillTitle: 'Critical thinking and analysis', isCustom: true}
];

export default {
  props: {
    'aria-label': 'Review Skills Container',
    title: 'Skills you can revise',
    listSkills,
    titleNoSkills: undefined,
    textNoSkills: undefined
  }
};
