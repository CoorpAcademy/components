import Header from '../../../../../organism/header-with-actions/test/fixtures/assignment-tracking';
import Shell from './list-items-assignment-without-scope';

// A three-line header (breadcrumb, title, subtitle) above a permanent notification.
export default {
  props: {
    ...Shell.props,
    header: {...Header.props, type: 'header-with-actions'},
    notifications: [
      {
        type: 'warning',
        message:
          'Workplace safety essentials is unavailable. Edit the assignment to update its content.',
        cta: [{label: 'Edit assignment', action: () => {}}]
      }
    ]
  }
};
