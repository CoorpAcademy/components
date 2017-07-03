export default {
  props: {
    logo: {
      href: '#'
    },
    themes: [
      {
        title: 'Digital',
        selected: true
      },
      {
        title: 'All',
        href: '#',
        selected: false
      },
      {
        title: 'Esprit du temps',
        href: '#',
        selected: false
      },
      {
        title: 'Gérer son épargne',
        href: '#',
        selected: false
      }
    ],
    pages: {
      displayed: [
        {
          title: 'Explore',
          href: '#',
          selected: true
        },
        {
          title: 'Battles',
          href: '#',
          selected: false
        }
      ],
      more: [
        {
          title: 'News',
          href: '#',
          selected: false
        },
        {
          title: 'Médias',
          href: '#',
          selected: false
        },
        {
          title: 'Discussions',
          href: '#',
          selected: false
        },
        {
          title: 'FAQ',
          href: '#',
          selected: false
        }
      ]
    },
    links: [
      {
        submitValue: 'Connexion',
        href: '#',
        target: '_self',
        light: false,
        small: true,
        secondary: true
      },
      {
        submitValue: 'Inscription',
        href: '#',
        target: '_self',
        light: false,
        small: true,
        secondary: false
      }
    ],
    settings: [
      {
        title: 'Language',
        type: 'select',
        options: {
          onChange: value => console.log(value),
          values: [
            {
              name: 'Pouet',
              value: 'Pouet',
              selected: false
            },
            {
              name: 'Pouet2',
              value: 'Pouet2',
              selected: true
            },
            {
              name: 'Pouet3',
              value: 'Pouet3',
              selected: false
            }
          ]
        }
      },
      {
        title: 'Mon compte',
        type: 'link',
        options: {
          target: '_blank',
          href: 'https://google.fr'
        }
      },
      {
        title: 'Se déconnecter',
        type: 'link',
        options: {
          href: 'https://google.fr'
        }
      },
      {
        title: 'Godmode',
        type: 'switch',
        options: {
          onChange: value => console.log(value),
          value: true
        }
      },
      {
        title: 'Fast slides',
        type: 'switch',
        options: {
          onChange: value => console.log(value),
          value: false
        }
      }
    ]
  }
};
