import advanced from '../../../../atom/content-badge/test/fixtures/advanced';
import base from '../../../../atom/content-badge/test/fixtures/default';

export default {
  props: {
    'aria-label': 'aria list',
    items: [base.props, advanced.props]
  }
};
