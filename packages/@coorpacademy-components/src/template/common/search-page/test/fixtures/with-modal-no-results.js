import cardsGrid from '../../../../../organism/cards-grid/test/fixtures/catalog';
import quickFilters from '../../../../../molecule/quick-filters/test/fixtures/many-categorize-with-filters-selected';
import multiFilterPanelProps from '../../../../../molecule/multi-filter-panel/test/fixtures/quick-filters';
import {COLORS} from '../../../../../variables/colors';

export default {
  props: {
    title: 'Explorer (0 items)',
    searchFilters: null,
    quickFilters: quickFilters.props,
    cards: {...cardsGrid.props, list: []}, // Empty results
    moreSortAriaLabel: 'show or hide sortBy options',
    moreFilterAriaLabel: 'show or hide sortBy options',
    filterGroupAriaLabel: 'Apply filtering options to refine search results',
    sortAriaLabel: 'show more sort options',
    filtersModal: {
      title: 'Filters',
      titleAriaLabel: 'Display the filters',
      headerIcon: {
        name: 'sliders',
        backgroundColor: COLORS.primary_100,
        color: COLORS.cm_blue_700
      },
      filterPanelProps: multiFilterPanelProps.props,
      isOpen: true,
      footer: {
        cancelButton: {
          onCancel: () => console.log('Clear search'),
          label: 'Clear',
          disabled: false
        },
        confirmButton: {
          onConfirm: () => console.log('show results'),
          label: 'No results with selected filters',
          disabled: true
        }
      },
      onClose: () => console.log('close modal'),
      detectScrollbar: true,
      customStyle: {
        width: '660px',
        maxWidth: '660px',
        maxHeight: '90vh'
      }
    }
  }
};
