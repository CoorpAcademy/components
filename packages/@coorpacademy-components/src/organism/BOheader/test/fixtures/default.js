import Picture from '../../../../atom/picture/test/fixtures/simple-src';

const {src} = Picture.props;

export default {
  props: {
    src,
    username: 'Hi, John Doe',
    srcUser: 'http://lorempixel.com/50/50/people/4',
    deconnexion: 'déconnexion' ,
    href: '/plop',
    hrefdeco: '/#'
  }
};
