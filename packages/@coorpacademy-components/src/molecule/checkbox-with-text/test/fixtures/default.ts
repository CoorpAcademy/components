export default {
  props: {
    title: 'Text',
    name: 'name',
    checked: true,
    onChange: () => {
      console.log('onChange clicked');
    },
    'aria-label': 'aria-label',
    'data-name': 'data-name'
  }
};
