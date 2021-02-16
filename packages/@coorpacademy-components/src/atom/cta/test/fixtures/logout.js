import primary from './primary';

export default {
  props: {
    ...primary.props,
    submitValue: 'Logout',
    logout: true
  }
};
