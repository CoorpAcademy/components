import customSkillDeletePopinProps from '../../../../../molecule/cm-popin/test/fixtures/custom-skill-delete';
import customSkillEditionProps from './custom-skill-edition';

export default {
  props: {
    ...customSkillEditionProps.props,
    popin: customSkillDeletePopinProps.props
  }
};
