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
    itemsHrefs: {
      platformList: '/list',
      seeMyPlatform: '/onboardin',
      logOut: '/logout',
      globalAnalytics: '/analytics'
    },
    href: '#'
  }
};
