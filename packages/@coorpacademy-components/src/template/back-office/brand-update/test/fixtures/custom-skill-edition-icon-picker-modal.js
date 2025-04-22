import customSkillIconPickerModalProps from '../../../../../molecule/icon-picker-modal/test/fixtures/default';
import customSkillEditionProps from './custom-skill-edition';

export default {
  props: {
    ...customSkillEditionProps.props,
    popin: {...customSkillIconPickerModalProps.props, type: 'icon-picker'},
  }
};

