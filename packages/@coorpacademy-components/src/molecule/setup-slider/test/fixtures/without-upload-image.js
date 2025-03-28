export default {
  props: {
    tabProps: [{title: 'Without Upload Image', isOpen: true}],
    slides: [
      {
        fields: [
          {
            type: 'select',
            title: 'Text position',
            options: [
              {
                name: 'Left',
                value: 'Pouet',
                selected: false
              },
              {
                name: 'Center',
                value: 'Pouet2',
                selected: true
              },
              {
                name: 'Right',
                value: 'Pouet3',
                selected: false
              }
            ],
            onChange: value => console.log(value)
          },
          {
            type: 'switch',
            title: 'Light color',
            value: false
          },
          {
            type: 'readonly',
            title: 'Informative input',
            value: 'Some data displayed to the user'
          },
          {
            type: 'text',
            title: 'Login',
            value: 'login'
          },
          {
            type: 'password',
            title: 'Password',
            value: 'XXXX-XXXXX'
          },
          {
            type: 'doublestep',
            toggleValue: 'Delete',
            confirmValue: 'Confirm',
            confirmDisabled: false,
            cancelValue: 'Cancel',
            description: "You are about to delete some important data. Click 'Confirm' to proceed.",
            textValidation: false,
            isPending: false,
            onClick: () => true
          }
        ]
      }
    ]
  }
};
