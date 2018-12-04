export default {
  props: {
    fields: [
      {
        type: 'text',
        title: 'Name',
        value: '',
        required: true,
        autoFocus: true
      },
      {
        type: 'splitScreen',
        providerCondition: {},
        groupSelection: {
          title: 'Country',
          values: [
            {
              type: 'checkbox',
              title: 'them_XXXX 1',
              checked: false
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 2',
              checked: false
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 3',
              checked: false
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 4',
              checked: false
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 5',
              checked: false
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 6',
              checked: false
            }
          ]
        }
      },
      {
        type: 'buttonGroup',
        buttonGroup: [
          {
            type: 'button',
            typeAction: 'submit',
            submitValue: 'SUBMIT'
          },
          {
            type: 'button',
            submitValue: 'DELELE',
            style: {
              backgroundColor: '#F73F52'
            }
          }
        ]
      }
    ]
  }
};
