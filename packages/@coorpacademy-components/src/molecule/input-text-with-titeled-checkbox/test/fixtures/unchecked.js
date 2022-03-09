export default {
  props: {
    title: 'Create badge',
    checked: false,
    onChange: value => console.log(value),
    checkBoxOnChange: value => console.log(value),
    inputTextTitle: 'Stars amount',
    inputTextValue: '250',
    inputTextDescription: 'This is the tooltip text',
    inputTextDisabled: true,
    inputTextOnChange: value => console.log(value)
  }
};
