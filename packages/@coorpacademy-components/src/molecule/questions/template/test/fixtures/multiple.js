export default {
  props: {
    template:
      'la réponse est {{sel31191}} {{sel31192}} lorem ipsum {{sel31193}} Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt {{sel31194}}.',
    answers: [
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
      },
      {
        type: 'select',
        name: 'sel31192',
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
      },
      {
        type: 'select',
        name: 'sel31193',
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
      },
      {
        type: 'select',
        name: 'sel31194',
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
