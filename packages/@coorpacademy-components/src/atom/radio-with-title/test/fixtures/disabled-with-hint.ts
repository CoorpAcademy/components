import disabledCheckedFixture from './disabled-checked';

export default {
  props: {
    ...disabledCheckedFixture.props,
    hint: "The rule can't change once the assignment has started."
  }
};
