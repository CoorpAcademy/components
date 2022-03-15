import inputText from '../../../input-text/test/fixtures/cm-default';

export default {
  props: {
    title: 'Mandatory courses to complete certification',
    inputText: {...inputText.props, error: 'this is error', hint: '', size: 'small'}
  }
};
