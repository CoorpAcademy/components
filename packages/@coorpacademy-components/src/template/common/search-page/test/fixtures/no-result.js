import filters from '../../../../../molecule/filters/test/fixtures/default';

const searchFilters = filters.props;

export default {
  props: {
    title: 'Catalogue : 0 résultat',
    searchFilters,
    clearFilters: {
      label: 'Clear filters',
      onClick: () => console.log('clear all filter'),
      type: 'primary'
    },
    cards: {
      list: []
    },
    noresultsfound: 'Sorry no result available'
  }
};
