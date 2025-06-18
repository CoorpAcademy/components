import customSkillDraftPopinProps from '../../../../../molecule/cm-popin/test/fixtures/custom-skill-draft';
import customSkillEditionProps from './custom-skill-edition';

export default {
  props: {
    ...customSkillEditionProps.props,
    popin: {...customSkillDraftPopinProps.props}
  }
};
