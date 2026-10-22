import fixture from './default';

// A published assignment with an unpublished edit (as in the Certification and Skill lists).
export default {
  props: {
    ...fixture.props,
    infoTags: [{key: 'ongoingChanges', label: 'Ongoing changes'}]
  }
};
