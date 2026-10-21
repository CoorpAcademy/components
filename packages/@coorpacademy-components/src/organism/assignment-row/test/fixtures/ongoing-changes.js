import fixture from './default';

// A published assignment with an unpublished edit (A1.4, as the Certification and Skill lists).
export default {
  props: {
    ...fixture.props,
    tags: [{key: 'ongoingChanges', label: 'Ongoing changes'}]
  }
};
