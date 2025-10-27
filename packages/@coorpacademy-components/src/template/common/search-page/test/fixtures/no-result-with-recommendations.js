import filters from '../../../../../molecule/filters/test/fixtures/default';
import CardsList from '../../../../../molecule/dashboard/cards-list/test/fixtures/default';

const searchFilters = filters.props;
const recommendations = CardsList.props;

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
    noresultsfound: 'Sorry no result available',
    recommendations
  }
};
