export default {
  props: {
    type: 'text',
    title: 'Name',
    placeholder: 'Your name',
    value: 'Foo',
    onChange: value => console.log(value)
  }
};
