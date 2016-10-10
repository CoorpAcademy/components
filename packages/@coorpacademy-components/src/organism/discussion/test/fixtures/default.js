import Thread from '../../../../molecule/forum-thread/test/fixtures/default';
import ThreadDeep from '../../../../molecule/forum-thread/test/fixtures/deep-answers';

const thread = Thread.props;
const thread2 = ThreadDeep.props;

export default {
  props: {
    title: 'Sandbox discussion',
    threads: [thread, thread2, thread, thread2]
  }
};
