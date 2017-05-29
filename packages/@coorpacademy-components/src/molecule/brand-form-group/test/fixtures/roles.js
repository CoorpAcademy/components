export default {
  props: {
    title: 'Roles',
    fields: [
      {
        type: 'switch',
        title: 'RH',
        value: true
      },
      {
        type: 'switch',
        title: 'CMS',
        value: false
      },
      {
        type: 'switch',
        title: 'Admin',
        value: true
      },
      {
        type: 'switch',
        title: 'Super coach'
      },
      {
        type: 'switch',
        title: 'Moderator'
      },
      {
        type: 'switch',
        title: 'System',
        value: false
      },
      {
        type: 'switch',
        title: 'Godmode'
      }
    ]
  }
};
