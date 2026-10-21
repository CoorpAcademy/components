import fixture from './idle';

// Everyone disables the three other blocks, with an explanation.
export default {
  props: {
    ...fixture.props,
    everyone: {...fixture.props.everyone, value: true},
    total: {label: 'Estimated audience: 12,480 learners', detail: 'Every learner of the platform'}
  }
};
