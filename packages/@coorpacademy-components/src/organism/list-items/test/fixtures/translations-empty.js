import buttonMenuAction from '../../../../molecule/button-menu-action/test/fixtures/default';
import translations from './translations';

export default {
  props: {
    ...translations.props,
    content: {
      items: [],
      type: 'list',
      emptyResult: {
        title: 'No translations for this skill yet',
        description: 'No translations for this skill yet. Click ‘Add translation’ to get started.',
        button: buttonMenuAction.props
      }
    }
  }
};
