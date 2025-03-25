import SelectSkillDetail from '../../../../atom/select/test/fixtures/skill-detail';

export default {
  props: {
    title: {
      type: 'form-group',
      title: 'Default language*',
      subtitle: 'Language in which the skill is created'
    },
    field: {
      ...SelectSkillDetail.props,
      options: [
        {
          name: '🇬🇧 English',
          value: 'en',
          selected: true
        },
        {
          name: '🇩🇪 German',
          value: 'de',
          selected: false
        },
        {
          name: '🇹🇭 Thai',
          value: 'th',
          selected: false
        },
        {
          name: '🇪🇸 Spanish',
          value: 'es',
          selected: false
        }
      ],
      theme: 'skillDetail',
      size: 'large'
    },
    childType: 'select'
  }
};
