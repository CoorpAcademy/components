import fixture from './default';

export default {
  props: {
    ...fixture.props,
    tags: [{key: 'processing', label: 'Syncing 3/8'}],
    progress: {value: 42, label: '42% completed · Updating learners, batch 3/8'}
  }
};
