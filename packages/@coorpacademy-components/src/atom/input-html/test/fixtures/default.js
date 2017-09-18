export default {
  props: {
    type: 'html',
    title: 'Description',
    placeholder: 'Your text',
    value: 'Foo <b>foo</b> foo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis!',
    onChange: value => console.log(value)
  }
};
