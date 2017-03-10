import take from 'lodash/fp/take';
import cursusHeader from '../../../../../molecule/cursus-header/test/fixtures/default';
import catalogBadge from '../../../../../molecule/catalog-badge/test/fixtures/default';
import catalogAssets from '../../../../../molecule/catalog-assets/test/fixtures/default';
import catalogCTA from '../../../../../molecule/catalog-cta/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, description, image} = cursusHeader.props;
const {badge} = catalogBadge.props;
const {assets} = catalogAssets.props;
const {rating, maxRating, linkBuy, linkTry} = catalogCTA.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    title,
    description,
    image,
    badge,
    linkBuy,
    linkTry,
    rating,
    maxRating,
    assets,
    disciplines: take(3, products)
  }
};
