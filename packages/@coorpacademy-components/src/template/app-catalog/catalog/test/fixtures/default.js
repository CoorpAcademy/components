import Categories from '../../../../../molecule/categories/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';
import cursusList from '../../../../../molecule/cursus-list/test/fixtures/default';

const {categories} = Categories.props;
const {products} = catalogCards.props;
const {cursuses} = cursusList.props;

export default {
  props: {
    categories,
    products,
    cursuses
  }
};
