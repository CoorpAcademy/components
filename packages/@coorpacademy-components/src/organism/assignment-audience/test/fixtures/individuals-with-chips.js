import populationsOnly from './populations-only';
import combined from './combined';

export default {
  props: {
    ...populationsOnly.props,
    populations: {...populationsOnly.props.populations, options: []},
    individuals: combined.props.individuals,
    total: {label: 'Estimated audience: 1 learner'}
  }
};
