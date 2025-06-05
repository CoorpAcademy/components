import SearchBar from '../../../../atom/input-search/test/fixtures/with-value';

const research = SearchBar.props;

export default {
  props: {
    logo: {
      src: 'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/onboarding/raw/coorp_logo-1522333286516.svg&h=80&w=600&q=90&m=contain',
      srcMobile:
        'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/onboarding/raw/coorp_logo_infinite-1553079705037.png&h=80&w=600&q=90&m=contain',
      href: '#',
      'aria-label': 'brand logo up.coorpacademy.com',
      openMenuAriaLabel: 'open the navigation menu',
      closeMenuAriaLabel: 'close the navigation menu',
      toolTipText: 'Access to Home',
      closeToolTipInformationTextAriaLabel: 'Press the escape key to close the information text'
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
          title: 'Catalogue',
          href: '#',
          selected: true
        },
        {
          title: 'Battles',
          href: '#',
          disabled: true,
          selected: false
        },
        {
          title: 'Certifications',
          href: '#',
          selected: false
        },
        {
          title: 'Review',
          href: '#',
          disabled: true,
          selected: false
        }
      ],
      more: [
        {
          title: 'Bienvenue dans MyLCL LEARNING, votre nouvel espace de formation !',
          href: '#',
          selected: false
        },
        {
          title: 'Médias',
          href: '#',
          disabled: true,
          selected: false
        },
        {
          title: 'Discussions',
          href: '#',
          selected: true
        },
        {
          title: 'FAQ',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue dans MyLCL LEARNING, votre nouvel espace de formation !',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue dans MyLCL LEARNING!',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue dans MyLCL LEARNING, ',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue dans MyLCL LEARNING, votre nouvel espace de formation !',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue dans MyLCL LEARNING, votre nouvel espace de formation !',
          href: '#',
          selected: false
        },
        {
          title: 'Bienvenue dans MyLCL LEARNING',
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
    'active-page-aria-label': 'Active page',
    'group-settings-aria-label': 'Manage settings',
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
        title: 'My account',
        'aria-label': 'logout',
        type: 'link',
        disabled: true,
        icon: 'user',
        options: {
          href: 'https://google.fr'
        }
      },
      {
        title: 'Godmode',
        type: 'switch',
        'aria-label': 'activate godmode',
        icon: 'infinity',
        options: {
          onChange: value => console.log(value),
          value: true
        }
      },
      {
        title: 'Fast slides',
        type: 'switch',
        icon: 'forward',
        'aria-label': 'activate fast slides',
        disabled: true,
        options: {
          onChange: value => console.log(value),
          value: false
        }
      },
      {
        title: 'Log out',
        'aria-label': 'logout',
        type: 'danger-link',
        icon: 'power-off',
        options: {
          href: 'https://google.fr'
        }
      }
    ]
  }
};
