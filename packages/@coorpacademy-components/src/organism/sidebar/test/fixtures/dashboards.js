export default {
  props: {
    items: [
      [
        {
          title: 'Analytics Engagement',
          type: 'link',
          onClick: value => {
            console.log('Clicked on Engagement', value);
          },
          selected: true,
          name: 'analytics.dashboard'
        },
        {
          title: 'Analytics User',
          type: 'link',
          name: 'analytics.users'
        },
        {
          title: 'Analytics Content',
          type: 'link',
          name: 'analytics.modules'
        },
        {
          title: 'Analytics Partners',
          type: 'link',
          name: 'analytics.partners'
        }
      ],
      [
        {
          title: 'Dashboard Engagement',
          type: 'info',
          name: 'stats-dashboard',
          value: 'blablabla dashboard engagament'
        },
        {
          title: 'Platform',
          name: 'dashboard-platform',
          type: 'inputtext',
          onChange: value => console.log('NEW platform', value),
          value: 'up'
        },
        {
          title: 'Provider',
          name: 'dashboard-provider',
          type: 'inputtext',
          onChange: value => console.log('NEW provider', value),
          value: 'ALL'
        },
        {
          title: 'Version',
          name: 'dashboard-version',
          type: 'select',
          onChange: value => console.log('NEW version', value),
          options: [
            {
              name: 'v1',
              value: 'v1',
              selected: true
            },
            {
              name: 'v2',
              value: 'v2',
              selected: false
            }
          ]
        }
      ]
    ]
  }
};
