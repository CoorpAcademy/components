import Default from './default';

export default {
  props: {
    ...Default.props,
    status: 'ended',
    statusLabel: 'Ended',
    completion: 100
  }
};
