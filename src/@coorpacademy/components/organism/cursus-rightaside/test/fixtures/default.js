import catalogCTA from '../../../../molecule/catalog-cta/test/fixtures/default';
const {rating, maxRating, linkBuy, linkTry} = catalogCTA.props;

export default {
  props: {
    rating,
    maxRating,
    linkBuy,
    linkTry,
    assets: [
      '2 DISCIPLINES',
      '144 QUESTIONS',
      '18 VIDÉOS'
    ],
    badge: 'https://unsplash.it/g/500/500?random'
  }
};
