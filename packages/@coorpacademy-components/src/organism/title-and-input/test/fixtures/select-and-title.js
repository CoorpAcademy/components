import Select from '../../../../atom/select/test/fixtures/skill-detail';
import Title from '../../../../atom/title/test/fixtures/form-group-title-required';

export default {
  props: {
    title: Title.props,
    field: {
      ...Select.props,
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
