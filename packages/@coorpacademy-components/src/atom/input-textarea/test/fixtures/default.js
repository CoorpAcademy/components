export default {
  props: {
    type: 'textarea',
    title: 'Name',
    placeholder: 'Your text',
    value: 'Foo foo foo',
    onChange: value => console.log(value) // eslint-disable-line no-console
  }
};
