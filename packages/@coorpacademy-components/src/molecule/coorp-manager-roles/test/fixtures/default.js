export default {
  props: {
    title: 'Coorp',
    fields: [
      {
        type: 'checkbox',
        titleColor: 'primary',
        title: 'RH',
        checked: true,
        disabled: true
      },
      {
        type: 'checkbox',
        titleColor: 'primary',
        title: 'CMS',
        checked: false
      },
      {
        type: 'checkbox',
        titleColor: 'primary',
        title: 'Admin',
        checked: true
      }
    ]
  }
};
