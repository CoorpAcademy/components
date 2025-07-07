import SkillEdition from '../../../../../organism/skill-edition/test/fixtures/default';
import Default from './custom-skill-edition';

export default {
  props: {
    ...Default.props,
    header: {
      isFetching: true,
      title: '',
      closeButton: {
        'aria-label': '',
        onClick: () => {}
      },
      tag: {
        label: 'Draft',
        type: 'warning',
        size: 'small'
      },
      saveStatus: {
        display: false,
        label: undefined
      },
      actionButtons: [],
      bulletPointMenuButton: {
        disabled: true,
        buttons: []
      },
      type: 'header-with-actions'
    },
    content: {...SkillEdition.props, isFetching: true, type: 'skill-edition'}
  }
};
