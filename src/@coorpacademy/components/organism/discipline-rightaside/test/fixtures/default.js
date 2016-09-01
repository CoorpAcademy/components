import catalogCTA from '../../../../molecule/catalog-cta/test/fixtures/default';
const {rating, maxRating, linkBuy, linkTry} = catalogCTA.props;

export default {
  props: {
    rating,
    maxRating,
    linkBuy,
    linkTry,
    author: {
      name: 'Eléphant',
      socialLinks: [
        {
          ref: 'facebook',
          link: 'http://www.facebook.com/pages/Elephant/146865738800649'
        },
        {
          ref: 'twitter',
          link: 'https://twitter.com/7A8officiel'
        }
      ]
    }
  }
};
