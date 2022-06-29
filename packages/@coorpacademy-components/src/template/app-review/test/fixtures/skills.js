import skills from '../../skills/test/fixtures/many-skills';
import {ViewNames} from '../../prop-types';

export default {
  props: {
    skills: skills.props,
    viewName: ViewNames.skills
  }
};
