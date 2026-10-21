import combined from './combined';

// Upload result collapsed (pick c): count tags, the kept line and the "Show all" toggle.
export default {
  props: {
    ...combined.props,
    populations: {
      ...combined.props.populations,
      options: combined.props.populations.options.map(option => ({...option, selected: false}))
    },
    individuals: {...combined.props.individuals, selected: []},
    total: {label: 'Estimated audience: 201 learners', detail: '201 from file'}
  }
};
