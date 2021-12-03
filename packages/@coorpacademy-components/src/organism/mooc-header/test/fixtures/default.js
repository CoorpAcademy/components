import SearchBar from '../../../../atom/input-search/test/fixtures/with-value';

const research = SearchBar.props;

export default {
  props: {
    logo: {
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491561426926.svg',
      srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo-generique-teams-mobile.png',
      href: '#',
      'aria-label': 'brand logo up.coorpacademy.com',
      'button-aria-label': 'brand logo used to open menu'
    },
    search: {
      ...research,
      onChange: value => console.log(value),
      onFocus: () => console.log('on Focus'),
      onBlur: () => console.log('blur'),
      'search-reset-aria-label': 'reset search input value'
    },
    onSubmitSearch: () => console.log('onSubmitSearch'),
    onResetSearch: () => console.log('onResetSearch'),
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
    'settings-aria-label': 'account settings',
    'close-settings-aria-label': 'close account settings',
    settings: [
      {
        title: 'Language',
        type: 'select',
        'aria-label': 'select language',
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
        'aria-label': 'go to my account',
        options: {
          target: '_blank',
          href: 'https://google.fr'
        }
      },
      {
        title: 'Se déconnecter',
        'aria-label': 'logout',
        type: 'link',
        color: '#f73f52',
        hoverColor: '#C51023',
        options: {
          href: 'https://google.fr'
        }
      },
      {
        title: 'Godmode',
        type: 'switch',
        'aria-label': 'activate godmode',
        options: {
          onChange: value => console.log(value),
          value: true
        }
      },
      {
        title: 'Fast slides',
        type: 'switch',
        'aria-label': 'activate fast slides',
        options: {
          onChange: value => console.log(value),
          value: false
        }
      }
    ]
  }
};
