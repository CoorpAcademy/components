import filters from '../../../../../molecule/filters/test/fixtures/default';
import clearFilter from '../../../../../atom/button/test/fixtures/clear';

const searchFilters = filters.props;
const clearFilters = clearFilter.props;

/* eslint-disable max-len */
export default {
  props: {
    searchFilters,
    clearFilters,
    cards: {
      list: []
    },
    noresultsfound: 'Sorry no result available'
  }
};
