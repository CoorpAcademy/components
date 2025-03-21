import buttonMenuAction from '../../../../molecule/button-menu-action/test/fixtures/default';

export default {
  props: {
    title: {
      title: 'Translations',
      type: 'form-group',
      'data-name': 'list-title',
      subtitle: 'Manage your translation to reach more learners',
      titleSize: 'xl-strong',
      subtitleSize: 'medium'
    },
    'aria-label': 'aria list',
    content: {
      items: [],
      type: 'list',
      emptyResult: {
        title: 'No translations for this skill yet',
        description: 'No translations for this skill yet. Click ‘Add translation’ to get started.',
        button: buttonMenuAction.props
      }
    },
    buttonMenuAction: buttonMenuAction.props
  }
};
