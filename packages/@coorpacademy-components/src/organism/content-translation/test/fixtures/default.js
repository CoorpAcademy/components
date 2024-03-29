import verticalMenu from '../../../../molecule/vertical-tabs/test/fixtures/with-selected-item';
import inputText from '../../../../atom/input-text/test/fixtures/cm-default';
import textArea from '../../../../atom/input-textarea/test/fixtures/cm-default';

const languageTabs = verticalMenu.props.tabs;

export default {
  props: {
    languageTabs,
    inputText: {...inputText.props, theme: 'coorpmanager'},
    textArea: {...textArea.props, theme: 'coorpmanager'},
    'list-aria-label': 'Languages list'
  }
};
