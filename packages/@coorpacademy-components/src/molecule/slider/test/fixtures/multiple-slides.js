import slideFixtures from '../../../../atom/slide/test/fixtures/default';

const slide = slideFixtures.props;

export default {
  props: {
    slides: [
      slide,
      {...slide, cover: 'url("http://www.lorempixel.com/200/200/nature/2")'},
      {...slide, cover: 'url("http://www.lorempixel.com/200/200/nature/3")'}
    ]
  }
};
