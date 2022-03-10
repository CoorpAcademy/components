export default {
  props: {
    title: 'Add stars',
    checked: true,
    checkBoxOnChange: value => console.log(value),
    inputTextTitle: 'Stars amount',
    inputTextValue: '250',
    inputTextDescription: 'This is the tooltip text',
    inputTextOnChange: value => console.log(value),
    'aria-label': {checkbox: 'check box', input: 'input text'}
  }
};
