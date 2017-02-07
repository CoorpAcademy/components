export default {
  props: {
    logo: {
      src: 'https://www.coorpacademy.com/assets/img/logo.svg',
      srcMobile: 'https://up.coorpacademy.com/assets/css/skin/logos/logo_coorpacademy_zeitgeist_small.92e2b75dbe0.svg',
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
          onChange: () => true,
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
          href: '#'
        }
      },
      {
        title: 'Godmode',
        type: 'switch',
        options: {
          value: true
        }
      },
      {
        title: 'Fast slides',
        type: 'switch',
        options: {
          value: false
        }
      }
    ]
  }
};
