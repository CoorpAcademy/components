export default {
  props: {
    items: [
      [
        {
          title: 'Analytics Engagement',
          type: 'link',
          handleOnClick: value => {
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
          handleOnChange: value => console.log('NEW platform', value),
          value: 'up'
        },
        {
          title: 'Provider',
          type: 'inputtext',
          handleOnChange: value => console.log('NEW provider', value),
          value: 'ALL'
        },
        {
          title: 'Version',
          type: 'select',
          handleOnChange: value => console.log('NEW version', value),
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
