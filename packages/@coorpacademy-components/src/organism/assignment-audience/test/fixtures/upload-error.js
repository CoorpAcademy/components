import populationsOnly from './populations-only';

export default {
  props: {
    ...populationsOnly.props,
    populations: {...populationsOnly.props.populations, options: []},
    upload: {
      ...populationsOnly.props.upload,
      status: 'error',
      error: 'The file could not be evaluated. Please try again.'
    },
    total: {label: 'Estimated audience: 0 learners'}
  }
};
