import Default from './default';

export default {
  props: {
    ...Default.props,
    status: 'upcoming',
    statusLabel: 'Upcoming',
    completion: 0,
    sync: {state: 'done', label: 'Up to date'}
  }
};
