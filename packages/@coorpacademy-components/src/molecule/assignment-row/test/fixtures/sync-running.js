import Default from './default';

export default {
  props: {
    ...Default.props,
    status: 'disabled',
    statusLabel: 'Disabled',
    audienceSummary: '3 populations · 12 learners',
    sync: {state: 'running', label: 'Syncing…', message: 'Updating the learner audience'}
  }
};
