export default {
  props: {
    groups: [{
      title: 'Editing Foo Barbaz',
      fields: [{
        type: 'select',
        title: 'Status',
        onChange: () => true,
        options: [{
          name: 'active',
          value: 'active',
          selected: false
        }, {
          name: 'inactive',
          value: 'inactive',
          selected: true
        }]
      }, {
        type: 'text',
        title: 'Name',
        required: true
      }, {
        type: 'text',
        title: 'Last name',
        required: true
      }, {
        type: 'text',
        title: 'Email',
        required: true
      }, {
        type: 'text',
        title: 'Login'
      }, {
        type: 'text',
        title: 'Provider',
        required: true
      }, {
        type: 'select',
        title: 'Language',
        onChange: () => true,
        options: [{
          name: 'foo',
          value: 'A',
          selected: false
        }, {
          name: 'bar',
          value: 'B',
          selected: true
        }, {
          name: 'baz',
          value: 'C',
          selected: false
        }]
      }, {
        type: 'text',
        title: 'Group'
      }]
    },
    {
      title: 'Roles',
      fields: [{
        type: 'switch',
        title: 'RH',
        value: true
      }, {
        type: 'switch',
        title: 'CMS',
        value: false
      }, {
        type: 'switch',
        title: 'Admin',
        value: true
      }, {
        type: 'switch',
        title: 'Super coach'
      }, {
        type: 'switch',
        title: 'Moderator'
      }, {
        type: 'switch',
        title: 'System',
        value: false
      }, {
        type: 'switch',
        title: 'Godmode'
      }]
    },
    {
      title: 'Organisation',
      fields: [{
        type: 'text',
        title: 'Company'
      }, {
        type: 'text',
        title: 'Boutique'
      }, {
        type: 'text',
        title: 'Branch'
      }, {
        type: 'text',
        title: 'Role'
      }]
    }],
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
