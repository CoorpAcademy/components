export default {
  props: {
    items: [
      [
        {
          title: 'This is a Title',
          type: 'title',
          uppercase: true
        },
        {
          title: 'Title link',
          type: 'link',
          onClick: value => {
            console.log('Clicked on title link', value);
          },
          selected: true,
          name: 'analytics.dashboard'
        },
        {
          title: 'Title link lowercase',
          type: 'link',
          uppercase: false,
          onClick: value => {
            console.log('Clicked on title link', value);
          },
          selected: false,
          name: 'analytics.dashboard'
        },
        {
          title: 'Filters',
          type: 'title'
        },
        {
          title: 'Multi select',
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
          title: 'Simple select',
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
          title: 'Info',
          type: 'info',
          value: '30 février',
          onClick: () => {
            console.log('About to launch!');
          }
        },
        {
          title: 'Info but neutral',
          type: 'info',
          value: '36 février',
          neutralColor: true,
          onClick: () => {
            console.log('About to launch, neutraly!');
          }
        }
      ],
      [
        {
          title: 'Goto Button',
          type: 'button',
          href: 'http://localhost:3004',
          neutralColor: true,
          uppercase: true,
          onClick: e => {
            console.log('Clicked on the button!');
            e.preventDefault();
          }
        },
        {
          title: 'Goto CTA simple',
          type: 'button',
          href: 'http://localhost:3004',
          neutralColor: true,
          cta: true,
          onClick: e => {
            console.log('Clicked on the CTA!');
            e.preventDefault();
          }
        },
        {
          title: 'Goto CTA custom',
          type: 'button',
          href: 'http://localhost:3004',
          neutralColor: true,
          cta: {
            rectangular: false,
            secondary: false
          },
          onClick: e => {
            console.log('Clicked on the Custom CTA!');
            e.preventDefault();
          }
        }
      ],
      [
        {
          title: 'Arabic text below using html in title',
          type: 'title'
        },
        {
          title: '<p align="right">.تدابير الوقاية مهمة للغاية لتجنب الانتشار المحتمل للفيروس</p>',
          type: 'link'
        }
      ]
    ]
  }
};
