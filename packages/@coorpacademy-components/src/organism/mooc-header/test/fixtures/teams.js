import Default from './default';

const {
  props: {logo}
} = Default;

export default {
  props: {
    logo,
    links: [
      {
        submitValue: 'Go to Platform',
        href: '#',
        target: '_self',
        light: false,
        small: true,
        secondary: false,
        className: 'teamsHeader'
      }
    ]
  }
};
