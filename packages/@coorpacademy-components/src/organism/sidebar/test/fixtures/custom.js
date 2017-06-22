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
          title: 'Engagement',
          type: 'link',
          href: '/analytics/dashboard',
          selected: true
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
        },
        {
          title: 'Population cible',
          type: 'info',
          value: '40012'
        }
      ]
    ]
  }
};
