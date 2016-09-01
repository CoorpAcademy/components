import catalogCTA from '../../../../molecule/catalog-cta/test/fixtures/default';
const {rating, maxRating, linkBuy, linkLearn} = catalogCTA.props;

export default {
  props: {
    rating,
    maxRating,
    linkBuy,
    linkLearn,
    assets: ['foo', 'bar', 'baz'],
    badge: 'https://unsplash.it/200/200/?random'
  }
};
