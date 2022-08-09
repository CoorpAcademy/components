export default {
  props: {
    template:
      'la réponse est {{inp81438}} {{sel31192}} lorem ipsum {{sel31193}} Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt {{sel31194}}.',
    answers: [
      {
        type: 'text',
        name: 'inp81438',
        label: '',
        placeholder: 'an answer',
        value: '',
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        name: 'sel31192',
        label: ' ',
        onChange: value => console.log(value),
        options: [
          {
            name: 'Choisissez une réponse qui soit un mot long ou vraiment trop long',
            value: 'sli_Nk2vje~E~.choice_VyloJkDEUb',
            validOption: false,
            selected: true
          },
          {
            name: 'exclusive',
            value: 'sli_Nk2vje~E~.choice_Ek~jJyPNUZ',
            selected: false
          }
        ]
      },
      {
        type: 'select',
        name: 'sel31193',
        label: ' ',
        onChange: value => console.log(value),
        options: [
          {
            name: 'Choisissez une réponse',
            value: 'sli_Nk2vje~E~.choice_VyloJkDEUb',
            selected: true
          },
          {
            name: 'exclusive',
            value: 'sli_Nk2vje~E~.choice_Ek~jJyPNUZ',
            selected: false
          }
        ]
      },
      {
        type: 'select',
        name: 'sel31194',
        label: ' ',
        onChange: value => console.log(value),
        options: [
          {
            name: 'Choisissez une réponse',
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
