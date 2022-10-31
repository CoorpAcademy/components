import cardDefault from '../../../../molecule/skill-card/test/fixtures/default';

export default {
  props: {
    listSkills: [
      {...cardDefault.props, skillTitle: 'Digital communication', isCustom: false},
      {...cardDefault.props, skillTitle: 'Creativity and innovation', isCustom: false},
      {...cardDefault.props, skillTitle: 'Agility', isCustom: false},
      {...cardDefault.props, skillTitle: 'Sustainable thinking', isCustom: false},
      {...cardDefault.props, skillTitle: 'Critical thinking and analysis', isCustom: true},
      {...cardDefault.props, skillTitle: 'Negotiation and powers of persuasion', isCustom: true},
      {...cardDefault.props, skillTitle: 'Digital communication', isCustom: false},
      {...cardDefault.props, skillTitle: 'Creativity and innovation', isCustom: false},
      {...cardDefault.props, skillTitle: 'Agility', isCustom: false},
      {...cardDefault.props, skillTitle: 'Sustainable thinking', isCustom: false},
      {...cardDefault.props, skillTitle: 'Critical thinking and analysis', isCustom: true},
      {...cardDefault.props, skillTitle: 'Negotiation and powers of persuasion', isCustom: true},
      {...cardDefault.props, skillTitle: 'Digital communication', isCustom: false},
      {...cardDefault.props, skillTitle: 'Creativity and innovation', isCustom: false},
      {...cardDefault.props, skillTitle: 'Agility', isCustom: false},
      {...cardDefault.props, skillTitle: 'Sustainable thinking', isCustom: false},
      {...cardDefault.props, skillTitle: 'Critical thinking and analysis', isCustom: true},
      {...cardDefault.props, skillTitle: 'Negotiation and powers of persuasion', isCustom: true}
    ]
  }
};
