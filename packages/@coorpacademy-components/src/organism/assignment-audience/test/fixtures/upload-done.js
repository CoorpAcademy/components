import combined from './combined';

export default {
  props: {
    ...combined.props,
    populations: {...combined.props.populations, options: []},
    individuals: {...combined.props.individuals, value: '', selected: [], suggestions: []},
    total: {label: 'Estimated audience: 12 learners'}
  }
};
