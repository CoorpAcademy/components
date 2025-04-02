import ContentSkillListItems from '../../../list-items/test/fixtures/content-skill-empty';
import defaultProps from './default';

export default {
  props: {
    ...defaultProps.props,
    contentList: {
      ...ContentSkillListItems.props,
      content: {
        ...ContentSkillListItems.props.content
      }
    }
  }
};
