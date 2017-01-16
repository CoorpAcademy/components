import fixtureSolutions from '../../../ssmenu-list/test/fixtures/solutions';
import fixtureFormations from '../../../ssmenu-list/test/fixtures/formations';
import fixtureCoorpacademy from '../../../ssmenu-list/test/fixtures/coorpacademy';

export default {
  props: {
    menuItems: [
      {
        title: 'Formations',
        href: '/plop',
        subItems: fixtureFormations.props.items
      },
      {
        title: 'Nos Solutions',
        href: '/plop',
        subItems: fixtureSolutions.props.items
      },
      {
        title: 'Coorpacademy',
        href: '/plop',
        subItems: fixtureCoorpacademy.props.items
      },
      {
        title: 'Blog',
        href: '/plop',
        outgoing: true
      },
      {
        title: 'Connexion',
        href: '/plop',
        type: 'secondary'
      },
      {
        title: 'Inscription',
        href: '/plop',
        type: 'primary'
      }
    ]
  }
};
