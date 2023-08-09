import uploadOpponentsFixture from './upload-opponents';

export default {
  props: {
    ...uploadOpponentsFixture.props,
    field: {
      ...uploadOpponentsFixture.props.field,
      loading: true
    }
  }
};
