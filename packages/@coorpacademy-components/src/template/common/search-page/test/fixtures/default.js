import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/many';

const searchFilters = filters.props;
const cards = cardsGrid.props;

/* eslint-disable max-len */

export default {
  props: {
    title: 'Catalog (8 items)',
    searchFilters,
    cards
  }
};
