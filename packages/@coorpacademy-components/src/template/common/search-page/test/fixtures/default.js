import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

const searchFilters = filters.props;
const cards = cardsGrid.props;

export default {
  props: {
    title: 'Catalog (8 items)',
    searchFilters,
    cards
  }
};
