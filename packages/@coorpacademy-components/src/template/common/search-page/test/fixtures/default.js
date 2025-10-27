import {defaultsDeep} from 'lodash/fp';
import filters from '../../../../../molecule/filters/test/fixtures/default';
import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';

const searchFilters = filters.props;
const cards = cardsGrid.props;

export default {
  props: {
    title: 'Catalog (8 items)',
    searchFilters: defaultsDeep(searchFilters, {
      openFilters: true
    }),
    cards,
    newVersion: false,
    moreSortAriaLabel: 'show or hide sortBy options',
    moreFilterAriaLabel: 'show or hide sortBy options',
    filterGroupAriaLabel: 'Apply filtering options to refine search results',
    sortAriaLabel: 'show more sort options'
  }
};
