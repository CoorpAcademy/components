import Thread from '../../../../molecule/forum-thread/test/fixtures/default';
import ThreadDeep from '../../../../molecule/forum-thread/test/fixtures/deep-answers';
import ForumComment from '../../../../molecule/forum-comment/test/fixtures/default';

const thread = Thread.props;
const thread2 = ThreadDeep.props;

export default {
  props: {
    ...ForumComment.props,
    title: 'Sandbox discussion',
    threads: [thread, thread2, thread, thread2]
  }
};
