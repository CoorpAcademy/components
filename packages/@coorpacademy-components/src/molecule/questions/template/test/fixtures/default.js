export default {
  props: {
    template: 'la réponse est {{inp81438}}, {{sel31191}}.',
    answers: [
      {
        type: 'text',
        name: 'inp81438',
        label: '',
        placeholder: 'an answer',
        value: 'This is my answer',
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        theme: 'template',
        name: 'sel31191',
        label: ' ',
        'aria-label': 'Select the correct answer',
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
    ],
    groupAriaLabel: 'Answer the question'
  }
};
