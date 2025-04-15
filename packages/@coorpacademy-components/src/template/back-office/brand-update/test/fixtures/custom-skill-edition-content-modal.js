import customSkillContentModalProps from '../../../../../organism/content-skill-modal/test/fixtures/default';
import customSkillEditionProps from './custom-skill-edition';

export default {
  props: {
    ...customSkillEditionProps.props,
    popin: {...customSkillContentModalProps.props, type: 'content'}
  }
};
