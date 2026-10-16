import defaultFixture from './default';

export default {
  props: {
    ...defaultFixture.props,
    title: 'End date',
    name: 'assignmentEnd',
    value: '2026-11-02',
    min: '2026-11-03',
    error: 'The end date must be on or after the start date.'
  }
};
