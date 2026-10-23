import combined from './combined';

// Everyone switched on over an audience already picked: the populations, the checked file and the
// learners stay visible but disabled, and nothing can be removed.
export default {
  props: {
    ...combined.props,
    everyone: {...combined.props.everyone, value: true},
    total: {label: 'Estimated audience: 12,480 learners', detail: 'Every learner of the platform'}
  }
};
