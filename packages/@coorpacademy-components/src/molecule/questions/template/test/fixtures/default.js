export default {
  props: {
    template: 'la réponse est {{inp81438}}, {{sel31191}}.',
    answerFields: [
      {
        type: 'text',
        name: 'inp81438',
        label: ' ',
        placeholder: 'an answer',
        value: '',
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        name: 'sel31191',
        label: ' ',
        onChange: value => console.log(value),
        options: [
          {
            name: 'temporary',
            value: 'sli_Nk2vje~E~.choice_VyloJkDEUb',
            selected: true
          },
          {
            name: 'exclusive',
            value: 'sli_Nk2vje~E~.choice_Ek~jJyPNUZ',
            selected: false
          }
        ]
      }
    ]
  }
};
