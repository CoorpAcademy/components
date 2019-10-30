import filters from '../../../../../molecule/filters/test/fixtures/default';
import clearFilter from '../../../../../atom/button/test/fixtures/clear';

const searchFilters = filters.props;
const clearFilters = clearFilter.props;

export default {
  props: {
    title: 'Catalogue : 0 résultat',
    searchFilters,
    clearFilters,
    cards: {
      list: []
    },
    noresultsfound: 'Sorry no result available'
  }
};
