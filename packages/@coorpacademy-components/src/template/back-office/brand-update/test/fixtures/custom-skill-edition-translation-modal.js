import customSkillTranslationModalProps from '../../../../../molecule/translation-modal/test/fixtures/default';
import customSkillEditionProps from './custom-skill-edition';

export default {
  props: {
    ...customSkillEditionProps.props,
    popin: {...customSkillTranslationModalProps.props, type: 'translation'}
  }
};
