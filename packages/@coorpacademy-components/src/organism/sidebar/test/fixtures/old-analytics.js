export default {
  props: {
    items: [
      [
        {
          title: 'Provider',
          type: 'multi-select',
          onChange: value => {
            console.log('NEW provider', value);
            value.selected = !value.selected;
            return value;
          },
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
          onChange: value => console.log('NEW population', value),
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
          title: 'Date lancement',
          type: 'info',
          value: '30 février'
        }
      ]
    ]
  }
};
