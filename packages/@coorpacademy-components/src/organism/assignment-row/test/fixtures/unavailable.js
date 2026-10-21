import fixture from './default';

// Modules hidden in the brand or no longer visible to the audience, computed on read (AQ37).
export default {
  props: {
    ...fixture.props,
    infoTags: [{key: 'unavailable', label: '2 modules unavailable'}]
  }
};
