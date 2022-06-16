import skills from '../../skills/test/fixtures/many-skills';
import {ViewNames} from '../../prop-types';

export default {
  props: {
    onboarding: skills.props,
    viewName: ViewNames.skills
  }
};
