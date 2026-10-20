import defaultFixture from './default';

const today = new Date().toISOString().slice(0, 10);

export default {
  props: {
    ...defaultFixture.props,
    min: today,
    value: today,
    hint: 'The start date cannot be in the past.'
  }
};
