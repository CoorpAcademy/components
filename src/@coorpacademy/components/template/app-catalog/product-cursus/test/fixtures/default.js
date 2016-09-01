import take from 'lodash/fp/take';
import cursusHeader from '../../../../../molecule/cursus-header/test/fixtures/default';
import cursusRightAside from '../../../../../organism/cursus-rightaside/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, description, image} = cursusHeader.props;
const {rating, maxRating, linkBuy, linkTry, assets, badge} = cursusRightAside.props;
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
