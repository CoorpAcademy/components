import InputTextArea from '../../../../atom/input-textarea/test/fixtures/cm-default';

export default {
  props: {
    title: {
      type: 'form-group',
      title: 'Description',
      titleSize: 'smallAndLight'
    },
    field: {
      ...InputTextArea.props,
      title: 'Description',
      value: '',
      placeholder: 'What is the skill about, what are the takeaways...',
      hint: '0/400 characters',
      size: 'large'
    },
    childType: 'inputTextArea'
  }
};
