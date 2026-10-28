import withExampleFixture from './with-example';

export default {
  props: {
    ...withExampleFixture.props,
    checked: true,
    disabled: true
  }
};
