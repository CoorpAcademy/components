import UpToDate from '../../../assignment-row/test/fixtures/default';
import Syncing from '../../../assignment-row/test/fixtures/syncing';
import SyncError from '../../../assignment-row/test/fixtures/sync-error';
import Unavailable from '../../../assignment-row/test/fixtures/unavailable';
import AllTags from '../../../assignment-row/test/fixtures/ongoing-changes-unavailable-syncing';

// The Active tab of the Coorpmanager Assignments list: the tab gives the state, so no row has a
// lifecycle tag; tags show only when they add information.
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
        {...Syncing.props, title: 'New joiners — October'},
        {...Unavailable.props, title: 'GDPR for managers', details: '1 external'},
        {...SyncError.props, title: 'Fire safety — warehouse teams'}
      ].map((item, index) => ({...item, id: `assignment-${index}`}))
    }
  }
};
