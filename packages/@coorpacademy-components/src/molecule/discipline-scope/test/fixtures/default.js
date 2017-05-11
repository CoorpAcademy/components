import scopeTabs from '../../../scope-tabs/test/fixtures/default';
import scopeContent from '../../../scope-content/test/fixtures/default';

const levels = scopeTabs.props.levels;
const content = scopeContent.props.content;

export default {
  props: {
    selected: 1,
    onClick: () => true,
    content,
    levels
  }
};
