import customSkillArchivePopinProps from '../../../../../molecule/cm-popin/test/fixtures/custom-skill-archive';
import customSkillPublishedProps from './custom-skill-published';

const {props} = customSkillPublishedProps;

export default {
  props: {
    ...props,
    popin: {...customSkillArchivePopinProps.props, icon: null, theme: 'archived'}
  }
};
