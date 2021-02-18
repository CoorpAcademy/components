import Default from './default';

const {
  props: {logo}
} = Default;

export default {
  props: {
    logo,
    links: [
      {
        submitValue: 'Go to your Platform',
        href: '#',
        target: '_self',
        small: false
      },
      {
        submitValue: 'Log out',
        href: '#',
        target: '_self',
        small: false,
        logout: true
      }
    ]
  }
};
