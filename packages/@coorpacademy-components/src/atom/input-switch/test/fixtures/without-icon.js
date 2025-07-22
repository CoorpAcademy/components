export default {
  props: {
    title: 'Show only new content',
    value: true,
    theme: 'newMooc',
    onChange: value => console.log('toggle new content', value)
  }
};
