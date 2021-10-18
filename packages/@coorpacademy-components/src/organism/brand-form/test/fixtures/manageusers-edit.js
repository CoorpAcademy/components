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
            title: 'Godmode',
            checked: true,
            error: true
          },
          {
            type: 'checkbox',
            titleStyle: 'secondary',
            title: 'System',
            checked: false,
            modified: true,
            disabled: false
          },
          {
            type: 'checkbox',
            titleStyle: 'tertiary',
            title: 'Admin'
          },
          {
            type: 'checkbox',
            titleStyle: 'secondary',
            title: 'CMS',
            checked: false,
            disabled: true
          }
        ]
      },
      {
        title: 'CM Roles',
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
                theme: 'coorpmanager',
                title: 'RH',
                checked: true,
                disabled: true
              },
              {
                type: 'checkbox',
                titleStyle: 'primary',
                theme: 'coorpmanager',
                title: 'CMS',
                checked: false
              },
              {
                type: 'checkbox',
                titleStyle: 'primary',
                theme: 'coorpmanager',
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
                theme: 'coorpmanager',
                checked: true,
                modified: true
              },
              {
                type: 'checkbox',
                title: 'Super coach',
                titleStyle: 'secondary',
                theme: 'coorpmanager',
                disabled: true
              },
              {
                type: 'checkbox',
                title: 'Moderator',
                titleStyle: 'secondary',
                theme: 'coorpmanager',
                disabled: true
              },
              {
                type: 'checkbox',
                title: 'System',
                titleStyle: 'secondary',
                theme: 'coorpmanager',
                modified: true,
                checked: false
              },
              {
                type: 'checkbox',
                title: 'Godmode',
                titleStyle: 'secondary',
                theme: 'coorpmanager',
                disabled: true,
                checked: true
              },
              {
                type: 'checkbox',
                title: 'Fastslide',
                titleStyle: 'secondary',
                theme: 'coorpmanager',
                disabled: false,
                checked: true,
                error: true
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
                theme: 'coorpmanager',
                checked: true
              },
              {
                type: 'checkbox',
                title: 'Super coach',
                titleStyle: 'tertiary',
                theme: 'coorpmanager',
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
