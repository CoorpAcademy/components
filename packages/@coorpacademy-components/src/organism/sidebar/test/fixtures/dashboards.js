export default {
  props: {
    items: [
      [
        {
          title: 'Engagement',
          type: 'link',
          onClick: value => {
            console.log('Clicked on Engagement', value);
          },
          selected: true,
          name: 'analytics.dashboard'
        },
        {
          title: 'Per User',
          type: 'link',
          name: 'analytics.users'
        },
        {
          title: 'Per Module',
          type: 'link',
          name: 'analytics.modules'
        },
        {
          title: 'Exports',
          type: 'link',
          name: 'analytics.exports'
        }
      ],
      [
        {
          title: 'Dashboard Engagement',
          type: 'info',
          value: 'blablabla dashboard engagament'
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
        {
          title: 'Platform',
          type: 'inputtext',
          onChange: value => console.log('NEW platform', value),
          defaultValue: 'up'
        }
      ]
    ]
  }
};
