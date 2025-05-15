import {ButtonMenuPropsFixture} from '../../types';

const menuWithLinksFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [
      {
        'data-name': 'catalogue',
        label: 'Catalogue',
        type: 'defaultLeft',
        link: {
          href: '/catalogue'
        }
      },
      {
        'data-name': 'battles',
        label: 'Battles ',
        type: 'defaultLeft',
        link: {
          href: '/battles'
        }
      },
      {
        'data-name': 'certification',
        label: 'Certification',
        type: 'defaultLeft',
        link: {
          href: '/certification'
        }
      }
    ],
    'aria-label': 'button menu with links',
    'data-name': 'menu-with-links'
  }
};

export default menuWithLinksFixture;
