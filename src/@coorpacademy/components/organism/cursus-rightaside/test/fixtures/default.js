import catalogCTA from '../../../../molecule/catalog-cta/test/fixtures/default';
const {rating, maxRating, linkBuy, linkLearn} = catalogCTA.props;

export default {
  props: {
    rating,
    maxRating,
    linkBuy,
    linkLearn,
    assets: [
      '2 DISCIPLINES',
      '144 QUESTIONS',
      '18 VIDÉOS'
    ],
    badge: 'https://unsplash.it/g/500/500?random'
  }
};
