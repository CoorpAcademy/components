export default {
  props: {
    items: [
      [
        {
          title: 'Dashboards',
          type: 'title'
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
          title: 'Filters',
          type: 'title'
        },
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
        }
      ],
      [
        {
          title: 'Date lancement',
          type: 'info',
          value: '30 février',
          onClick: () => {
            console.log('About to launch!');
          }
        },
        {
          title: 'Date lancement but neutral',
          type: 'info',
          value: '36 février',
          neutralColor: true,
          onClick: () => {
            console.log('About to launch, neutraly!');
          }
        },
        {
          title: 'Goto Home',
          type: 'button',
          href: 'http://localhost:3004',
          neutralColor: true,
          onClick: e => {
            console.log('Clicked on the button!');
            e.preventDefault();
          }
        },
        {
          title: '<p align="right">.تدابير الوقاية مهمة للغاية لتجنب الانتشار المحتمل للفيروس</p>',
          type: 'link'
        }
      ]
    ]
  }
};
