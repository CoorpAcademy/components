export default {
  props: {
    items: [
      [
        {
          title: 'Provider',
          type: 'select',
          options: [
            {
              name: 'ALL',
              value: 'ALL',
              selected: true
            },
            {
              name: 'Provider 1',
              value: 'prov1',
              selected: false
            },
            {
              name: 'Provider 2',
              value: 'prov2',
              selected: false
            }
          ]
        },
        {
          title: 'Population',
          type: 'select',
          options: [
            {
              name: 'ALL',
              value: 'ALL',
              selected: true
            },
            {
              name: 'Population 1',
              value: 'pop1',
              selected: false
            },
            {
              name: 'Population 2',
              value: 'pop2',
              selected: false
            }
          ]
        },
        {
          title: 'Engagement',
          type: 'link',
          href: '/analytics/dashboard'
        },
        {
          title: 'Per User',
          type: 'link',
          href: '/analytics/users/activity'
        },
        {
          title: 'Per Module',
          type: 'link',
          href: 'analytics/exports/global'
        },
        {
          title: 'Exports',
          type: 'link',
          href: 'analytics/exports/global'
        }
      ],
      [
        {
          title: 'Date lancement',
          type: 'info',
          value: '30 février'
        }
      ]
    ]
  }
};
