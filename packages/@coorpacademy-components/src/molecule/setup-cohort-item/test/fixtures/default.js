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
        type: 'splitScreen',
        providerCondition: {
          title: 'The Provider',
          values: [
            {
              type: 'checkbox',
              title: 'Provider 1',
              checked: true,
              value: 'them_cascsa'
            },
            {
              type: 'checkbox',
              title: 'Provider 2',
              checked: true,
              value: 'them_3r2fwc'
            },
            {
              type: 'checkbox',
              title: 'Provider 3',
              checked: true,
              value: 'them_wefewgweb'
            },
            {
              type: 'checkbox',
              title: 'Provider 4',
              checked: true,
              value: 'them_bwegwegwe'
            },
            {
              type: 'checkbox',
              title: 'Provider 5',
              checked: true,
              value: 'them_gwegwevfwe'
            },
            {
              type: 'checkbox',
              title: 'Provider 6',
              checked: true,
              value: 'them_ewgwebh'
            }
          ]
        },
        groupSelection: {
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
              checked: true
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 3',
              checked: true
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 4',
              checked: true
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 5',
              checked: true
            },
            {
              type: 'checkbox',
              title: 'them_XXXX 6',
              checked: true
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
