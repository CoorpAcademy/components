export default {
  props: {
    type: 'switch',
    title: 'Name',
    value: false,
    modified: true,
    onChange: value => console.log(value),
    titlePosition: 'right',
    theme: 'coorpmanager',
    dataName: '-functionnal-cookies'
  }
};
