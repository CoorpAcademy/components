import SkillEdition from '../../../../../organism/skill-edition/test/fixtures/loading';
import HeaderWithActionsProps from '../../../../../organism/header-with-actions/test/fixtures/loading';
import Default from './custom-skill-edition';

export default {
  props: {
    ...Default.props,
    header: {...HeaderWithActionsProps.props, type: 'header-with-actions'},
    content: {...SkillEdition.props, type: 'skill-edition'}
  }
};
