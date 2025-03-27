import searchProps from '../../../../atom/input-search/test/fixtures/coorpmanager';

export default {
  props: {
    title: {title: '0 item', type: 'form-group', titleSize: 'medium-light-color'},

    'aria-label': 'aria list',
    content: {
      items: [],
      type: 'list',
      emptyResult: {
        title: 'No results...',
        description: 'Try adjusting your search to find what you are looking for.',
        button: {
          type: 'text',
          label: 'Clear search',
          onClick: () => console.log('clear search')
        }
      }
    },
    search: {...searchProps.props, placeholder: 'Search content'}
  }
};
