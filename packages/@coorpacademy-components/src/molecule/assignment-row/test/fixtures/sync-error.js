import Default from './default';

export default {
  props: {
    ...Default.props,
    title:
      'An extended translated assignment title explaining essential security practices across international teams',
    sync: {
      state: 'error',
      label: 'Synchronization failed',
      message: 'The audience could not be synchronized. Try again.'
    }
  }
};
