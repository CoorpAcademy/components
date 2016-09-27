import Thread from '../../../../molecule/forum-thread/test/fixtures/default';

const thread = Thread.props;

export default {
  props: {
    threads: [thread, thread, thread]
  }
};
