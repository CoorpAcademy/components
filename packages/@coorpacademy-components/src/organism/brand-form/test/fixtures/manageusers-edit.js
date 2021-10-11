export default {
  props: {
    groups: [
      {
        title: 'Editing Foo Barbaz',
        fields: [
          {
            type: 'select',
            title: 'Status',
            description: 'Deactivation Date: 01/01/2019',
            onChange: () => true,
            options: [
              {
                name: 'active',
                value: 'active',
                selected: false
              },
              {
                name: 'inactive',
                value: 'inactive',
                selected: true
              }
            ]
          },
          {
            type: 'text',
            title: 'Name',
            required: true
          },
          {
            type: 'text',
            title: 'Last name',
            required: true
          },
          {
            type: 'text',
            title: 'Email',
            required: true
          },
          {
            type: 'text',
            title: 'Login'
          },
          {
            type: 'text',
            title: 'Provider',
            required: true
          },
          {
            type: 'select',
            title: 'Language',
            onChange: () => true,
            options: [
              {
                name: 'foo',
                value: 'A',
                selected: false
              },
              {
                name: 'bar',
                value: 'B',
                selected: true
              },
              {
                name: 'baz',
                value: 'C',
                selected: false
              }
            ]
          },
          {
            type: 'text',
            title: 'Group'
          }
        ]
      },
      {
        title: 'Roles',
        subtitle:
          'Elit enim viverra enim, blandit turpis quam pretium id. Et, leo, amet odio proin diam sit lorem accumsan.',
        fieldsLayout: 'grid',
        groupLayout: 'grid',
        fields: [
          {
            title: 'Coorp',
            type: 'roles',
            fields: [
              {
                type: 'checkbox',
                titleStyle: 'primary',
                title: 'RH',
                checked: true,
                disabled: true
              },
              {
                type: 'checkbox',
                titleStyle: 'primary',
                title: 'CMS',
                checked: false
              },
              {
                type: 'checkbox',
                titleStyle: 'primary',
                title: 'Admin',
                checked: true
              }
            ]
          },
          {
            title: 'Mooc',
            type: 'roles',
            fields: [
              {
                type: 'checkbox',
                title: 'Admin',
                titleStyle: 'secondary',
                checked: true
              },
              {
                type: 'checkbox',
                title: 'Super coach',
                titleStyle: 'secondary',
                disabled: true
              },
              {
                type: 'checkbox',
                title: 'Moderator',
                titleStyle: 'secondary',
                disabled: true
              },
              {
                type: 'checkbox',
                title: 'System',
                titleStyle: 'secondary',
                checked: false
              },
              {
                type: 'checkbox',
                title: 'Godmode',
                titleStyle: 'secondary',
                disabled: true,
                checked: true
              }
            ]
          },
          {
            title: 'CM',
            type: 'roles',
            fields: [
              {
                type: 'checkbox',
                title: 'Admin',
                titleStyle: 'tertiary',
                checked: true
              },
              {
                type: 'checkbox',
                title: 'Super coach',
                titleStyle: 'tertiary',
                checked: true
              }
            ]
          }
        ]
      },
      {
        title: 'Organisation',
        fields: [
          {
            type: 'text',
            title: 'Company'
          },
          {
            type: 'text',
            title: 'Boutique'
          },
          {
            type: 'text',
            title: 'Branch'
          },
          {
            type: 'text',
            title: 'Role'
          }
        ]
      }
    ],
    back: {
      desc: 'Back to users list',
      link: '#'
    },
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
