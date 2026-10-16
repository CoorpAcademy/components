import combined from './combined';

export default {
  props: {
    ...combined.props,
    upload: {...combined.props.upload, status: 'idle', summary: undefined, rows: []},
    individuals: {...combined.props.individuals, value: '', selected: [], suggestions: []},
    total: {label: 'Estimated audience: 24 learners'}
  }
};
