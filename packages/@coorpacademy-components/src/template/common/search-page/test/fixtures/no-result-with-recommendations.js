import filters from '../../../../../molecule/filters/test/fixtures/default';
import clearFilter from '../../../../../atom/button/test/fixtures/clear';
import CardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/default';

const searchFilters = filters.props;
const clearFilters = clearFilter.props;
const recommendations = CardsList.props;

export default {
  props: {
    title: 'Catalogue : 0 résultat',
    searchFilters,
    clearFilters,
    cards: {
      list: []
    },
    noresultsfound: 'Sorry no result available',
    recommendations
  }
};
