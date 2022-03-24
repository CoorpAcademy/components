import advanced from '../../../../atom/content-badge/test/fixtures/advanced';
import coach from '../../../../atom/content-badge/test/fixtures/coach';
import base from '../../../../atom/content-badge/test/fixtures/default';

export default {
  props: {
    'aria-label': 'aria list',
    items: [base.props, advanced.props, coach.props]
  }
};
