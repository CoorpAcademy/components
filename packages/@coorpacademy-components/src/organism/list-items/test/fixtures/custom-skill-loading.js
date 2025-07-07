import defaultFixture from './custom-skill';

export default {
  props: {
    ...defaultFixture.props,
    content: {},
    isFetching: true
  }
};
