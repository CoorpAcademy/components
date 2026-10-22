import combined from './combined';

// Upload result: the file line, the count tags, the kept line and the download of the logins not kept.
export default {
  props: {
    ...combined.props,
    populations: {
      ...combined.props.populations,
      options: combined.props.populations.options.map(option => ({...option, selected: false}))
    },
    individuals: {...combined.props.individuals, selected: []},
    total: {label: 'Estimated audience: 3 learners', detail: '3 from file'}
  }
};
