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
        providerCondition: {
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
          }
        ]
      }
    ]
  }
};
