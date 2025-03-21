import translation from '../../../list-item/test/fixtures/translation';
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
      items: [{...translation.props}],
      type: 'list'
    },
    buttonMenuAction: buttonMenuAction.props
  }
};
