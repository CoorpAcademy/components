import Header from '../../../../../organism/setup-header/test/fixtures/default';

export default {
  props: {
    header: Header.props,
    brands: [],
    search: {
      value: '',
      placeholder: 'Search brand',
      onChange: () => {}
    },
    create: {
      edit: 'Create a new platform',
      editHref: '#'
    }
  }
};
