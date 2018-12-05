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
        leftSection: {
          title: 'The Provider',
          values: [
            {
              type: 'checkbox',
              title: 'Provider 1',
              checked: false,
              value: 'them_cascsa'
            },
            {
              type: 'checkbox',
              title: 'Provider 2',
              checked: false,
              value: 'them_3r2fwc'
            },
            {
              type: 'checkbox',
              title: 'Provider 3',
              checked: false,
              value: 'them_wefewgweb'
            },
            {
              type: 'checkbox',
              title: 'Provider 4',
              checked: false,
              value: 'them_bwegwegwe'
            },
            {
              type: 'checkbox',
              title: 'Provider 5',
              checked: false,
              value: 'them_gwegwevfwe'
            },
            {
              type: 'checkbox',
              title: 'Provider 6',
              checked: false,
              value: 'them_ewgwebh'
            }
          ]
        },
        rightSection: {},
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
