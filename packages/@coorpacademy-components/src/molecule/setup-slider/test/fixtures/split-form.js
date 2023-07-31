export default {
  props: {
    tabProps: [{title: 'Split Form', isOpen: true}],
    slides: [
      {
        fields: [
          {
            type: 'splitForm',
            leftSection: {
              title: 'The Provider',
              required: true,
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
            rightSection: {
              title: 'Content',
              required: true,
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
    ]
  }
};
