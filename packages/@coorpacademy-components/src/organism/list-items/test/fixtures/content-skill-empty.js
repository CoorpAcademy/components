import searchProps from '../../../../atom/input-search/test/fixtures/coorpmanager';
import checkboxWithTitleProps from '../../../../atom/checkbox-with-title/test/fixtures/with-custom-icon';

export default {
  props: {
    checkboxWithTitle: {
      ...checkboxWithTitleProps.props,
      title: `<span style="color: #1D1D2B;">0</span><span>&nbsp;</span>items`,

      customStyle: {...checkboxWithTitleProps.props.customStyle, paddingLeft: '16px'}
    },
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
    search: {...searchProps.props, value: 'qfqdf', placeholder: 'Search content'}
  }
};
