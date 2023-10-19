import EmptyStateDashboard from '../../../../../molecule/bulk-infos/test/fixtures/default';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;

export default {
  props: {
    header,
    items,
    content: {
      ...EmptyStateDashboard.props,
      key: 'bulk-empty-dashboard',
      type: 'bulk-empty-dashboard'
    },
    contentFixHeight: true
  }
};
