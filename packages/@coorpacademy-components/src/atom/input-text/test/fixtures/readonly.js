export default {
  props: {
    type: 'text',
    title: 'Read-only Input',
    placeholder: 'This field is read-only',
    value: 'This value cannot be edited',
    readOnly: true,
    onChange: () => {
      console.log('This should not be called in readonly mode');
    }
  }
};
