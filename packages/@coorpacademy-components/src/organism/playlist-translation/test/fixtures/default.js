import vericalMenu from '../../../../molecule/vertical-tabs/test/fixtures/with-selected-item';
import inputText from '../../../../atom/input-text/test/fixtures/cm-default';
import textArea from '../../../../atom/input-textarea/test/fixtures/cm-default';

const languageTabs = vericalMenu.props.tabs;

export default {
  props: {
    languageTabs,
    inputText: inputText.props,
    textArea: textArea.props,
    cta: {
      label: 'Add translation',
      type: 'add',
      handleOnClick: () => {}
    },
    'list-aria-label': 'Languages list'
  }
};
