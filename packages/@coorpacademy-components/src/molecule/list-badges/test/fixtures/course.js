import course from '../../../../atom/content-badge/test/fixtures/course';
import hidden from '../../../../atom/content-badge/test/fixtures/hidden';

export default {
  props: {
    'aria-label': 'aria list',
    items: [course.props, hidden.props]
  }
};
