import Default from '../../../../molecule/assignment-row/test/fixtures/default';
import Running from '../../../../molecule/assignment-row/test/fixtures/sync-running';
import Error from '../../../../molecule/assignment-row/test/fixtures/sync-error';
import DisabledDelete from '../../../../molecule/assignment-row/test/fixtures/disabled-delete';
import Upcoming from '../../../../molecule/assignment-row/test/fixtures/completion-empty';
import Ended from '../../../../molecule/assignment-row/test/fixtures/completion-complete';

export default {
  props: {
    title: 'Assignments',
    'aria-label': 'Assignment list',
    content: {
      type: 'list',
      itemType: 'assignment',
      items: [Default, Running, Error, DisabledDelete, Upcoming, Ended].map((fixture, index) => ({
        ...fixture.props,
        id: `assignment-${index}`
      }))
    }
  }
};
