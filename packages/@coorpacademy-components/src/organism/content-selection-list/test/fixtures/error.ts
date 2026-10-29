import assignment from './assignment';

export default {
  props: {
    ...assignment.props,
    error: 'An assignment holds at most 50 modules.'
  }
};
