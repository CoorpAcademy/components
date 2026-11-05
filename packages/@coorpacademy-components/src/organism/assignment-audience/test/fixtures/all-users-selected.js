import base from './idle';
import allUsers from './all-users-only';

export default {
  props: {
    ...base.props,
    populations: {
      ...allUsers.props.populations,
      options: allUsers.props.populations.options.map(option => ({...option, selected: true}))
    },
    total: {label: 'Estimated audience: 12,480 learners', detail: 'Every learner of the platform'}
  }
};
