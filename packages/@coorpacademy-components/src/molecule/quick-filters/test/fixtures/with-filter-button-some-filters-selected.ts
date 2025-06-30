import filterButtonWithTag from '../../../../atom/button-link/test/fixtures/button-tertiary-fa-icon-left-with-tag';
import Default from './default';

export default {
  props: {
    ...Default.props,
    filterButton: {
      ...filterButtonWithTag.props
    }
  }
};
