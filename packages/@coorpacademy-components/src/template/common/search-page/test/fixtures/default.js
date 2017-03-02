import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

const searchFilters = filters.props;
const cards = cardsGrid.props;

/* eslint-disable max-len */

export default {
  props: {
    searchFilters,
    cards
  }
};
