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
    leftItems: [
      {
        href: '/list',
        type: 'link',
        variant: 'primary',
        title: 'Platform List'
      },
      {
        href: '/list',
        type: 'link',
        variant: 'nonary',
        title: 'Platform Name'
      }
    ],
    rightItems: [
      {
        href: '/list',
        type: 'link',
        variant: 'tertiary',
        title: 'See My Platform'
      },
      {
        href: '/list',
        type: 'link',
        variant: 'nonary',
        title: 'Platform Name'
      }
    ],
    href: '#'
  }
};
