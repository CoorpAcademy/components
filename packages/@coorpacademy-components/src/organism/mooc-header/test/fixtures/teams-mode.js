export default {
  props: {
    logo: {
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491561426926.svg',
      srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491561428898.svg',
      href: '#'
    },
    links: [
      {
        submitValue: 'Go to your platform',
        href: 'https://onboarding.coorpacademy.com/dashboard',
        target: '_blank',
        light: false,
        small: true,
        secondary: false,
        className: 'teamsHeader'
      }
    ],
    mode: 'teams_dashboard'
  }
};
