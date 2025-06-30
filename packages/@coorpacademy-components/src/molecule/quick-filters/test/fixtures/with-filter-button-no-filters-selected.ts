import Default from './default';

export default {
  props: {
    ...Default.props,
    filterButton: {
      label: 'Filters',
      'aria-label': 'open-filters-modal',
      'data-name': 'open-filters-modal',
      icon: {
        position: 'left',
        faIcon: {name: 'sliders', size: 16, color: '#4A4A4A'}
      }
    }
  }
};
