import fixture from './syncing';

export default {
  props: {
    ...fixture.props,
    tags: [
      {key: 'ongoingChanges', label: 'Ongoing changes'},
      {key: 'unavailable', label: '2 modules unavailable'},
      {key: 'processing', label: 'Syncing 3/8'}
    ]
  }
};
