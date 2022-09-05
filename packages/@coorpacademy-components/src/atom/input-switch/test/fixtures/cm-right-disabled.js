export default {
  props: {
    type: 'switch',
    title: 'Name',
    value: false,
    disabled: true,
    onChange: value => console.log(value),
    titlePosition: 'right',
    theme: 'coorpmanager',
    dataName: '-functionnal-cookies'
  }
};
