export default {
  props: {
    fields: [
      {
        type: 'text',
        title: 'Name',
        value: 'value',
        required: true
      },
      {
        type: 'splitSreen',
        conditions: [
          {
            type: 'checkbox',
            title: 'Provider 1',
            checked: true
          },
          {
            type: 'checkbox',
            title: 'Provider 2',
            checked: true
          },
          {
            type: 'checkbox',
            title: 'Provider 3',
            checked: true
          },
          {
            type: 'checkbox',
            title: 'Provider 4',
            checked: true
          },
          {
            type: 'checkbox',
            title: 'Provider 5',
            checked: true
          },
          {
            type: 'checkbox',
            title: 'Provider 6',
            checked: true
          }
        ],
        groups: [
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
