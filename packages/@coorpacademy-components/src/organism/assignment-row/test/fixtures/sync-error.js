import fixture from './default';

export default {
  props: {
    ...fixture.props,
    infoTags: [{key: 'syncError', label: 'Sync error'}],
    progress: {value: 42, label: '42% completed · Last sync failed: learners service timeout'}
  }
};
