export default {
  props: {
    type: 'text',
    title: 'Read-only Input',
    placeholder: 'This field is read-only',
    value: 'This value cannot be edited',
    readOnly: true,
    theme: 'coorpmanager',
    description: 'This input field is read-only and cannot be modified',
    onChange: () => {
      console.log('This should not be called in readonly mode');
    }
  }
};
