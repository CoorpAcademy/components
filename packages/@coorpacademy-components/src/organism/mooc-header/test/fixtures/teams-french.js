import Default from './default';

const {
  props: {logo}
} = Default;

export default {
  props: {
    logo,
    links: [
      {
        submitValue: 'Accédez à votre plateforme',
        href: '#',
        target: '_self',
        small: false
      },
      {
        submitValue: 'Se déconnecter',
        href: '#',
        target: '_self',
        small: false,
        logout: true
      }
    ]
  }
};
