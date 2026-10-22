import omit from 'lodash/fp/omit';
import combined from './combined';

const upload = omit(['file', 'summary', 'keptLabel', 'report', 'error'], combined.props.upload);

// Nothing uploaded yet.
export const idleUpload = {...upload, status: 'idle'};

export default {
  props: {
    ...combined.props,
    populations: {
      ...combined.props.populations,
      options: combined.props.populations.options.map(option => ({...option, selected: false}))
    },
    upload: idleUpload,
    individuals: {...combined.props.individuals, selected: []},
    total: {label: 'Estimated audience: 0 learners'}
  }
};
