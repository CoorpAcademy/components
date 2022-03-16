import inputText from '../../../input-text/test/fixtures/cm-default';

export default {
  props: {
    title: 'Mandatory courses to complete certification',
    inputText: {
      ...inputText.props,
      title: 'Amount (6 items max)',
      error: 'this is error',
      hint: '',
      size: 'small'
    }
  }
};
