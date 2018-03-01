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
    menuItems: [
      {
        href: 'Log out',
        title: '#logout'
      }
    ],
    href: '#'
  }
};
