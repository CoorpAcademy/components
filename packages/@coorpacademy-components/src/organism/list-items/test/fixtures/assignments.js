import UpToDate from '../../../../molecule/assignment-row/test/fixtures/default';
import Syncing from '../../../../molecule/assignment-row/test/fixtures/syncing';
import SyncError from '../../../../molecule/assignment-row/test/fixtures/sync-error';
import Unavailable from '../../../../molecule/assignment-row/test/fixtures/unavailable';
import AllTags from '../../../../molecule/assignment-row/test/fixtures/ongoing-changes-unavailable-syncing';

// The Active tab of the Coorpmanager Assignments list: the tab gives the state, so no row has a
// lifecycle tag (INFO); tags show only when they add information (Q3).
export default {
  props: {
    title: '5 active assignments',
    'aria-label': 'Assignment list',
    content: {
      type: 'list',
      itemType: 'assignment',
      items: [
        AllTags.props,
        {
          ...UpToDate.props,
          title: 'Cybersecurity reflexes 2026',
          progress: {value: 64, label: '64% completed'}
        },
        Syncing.props,
        {...Unavailable.props, title: 'GDPR for managers', details: '1 external'},
        {...SyncError.props, title: 'Fire safety — warehouse teams'}
      ].map((item, index) => ({...item, id: `assignment-${index}`}))
    }
  }
};
