import Picture from '../../../../atom/picture/test/fixtures/simple-src';

const {src} = Picture.props;

export default {
  props: {
    logo: src,
    logoMobile: src,
    user: {
      username: 'Hi, John Doe',
      image: 'http://lorempixel.com/50/50/people/4'
    },
    platformName: 'Onboarding',
    items: {
      platformList: {href: '/list', label: 'Platform List'},
      seeMyPlatform: {href: '/onboardin', label: 'See My Platform'},
      logOut: {
        href: '/logout',
        label: 'Log Out',
        onClick: () => {
          console.log('onClick');
        }
      },
      globalAnalytics: {href: '/analytics', label: 'Dashboards'}
    },
    href: '#'
  }
};
