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
          value: 'blablabla dashboard engagament'
        },
        {
          title: 'Platform',
          type: 'inputtext',
          onChange: value => console.log('NEW platform', value),
          defaultValue: 'up'
        },
        {
          title: 'Provider',
          type: 'inputtext',
          onChange: value => console.log('NEW provider', value),
          defaultValue: 'ALL'
        },
        {
          title: 'Version',
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
        },
      ]
    ]
  }
};
