export default {
  props: {
    fields: [
      {
        type: 'text',
        title: 'Name',
        value: 'value',
        required: true,
        autoFocus: true
      },
      {
        type: 'splitForm',
        leftSection: {},
        rightSection: {
          title: 'Country',
          values: [
            {
              type: 'checkbox',
              title: 'them_XXXX 1',
              checked: true
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
        },
        buttons: [
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
