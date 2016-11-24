import ForumComment from '../../../../molecule/forum/forum-comment/test/fixtures/default';
import Thread from '../../../../molecule/forum/forum-thread/test/fixtures/default';

const thread = Thread.props;

export default {
  props: {
    ...ForumComment.props,
    title: 'Loading more posts',
    loading: true,
    threads: [thread]
  }
};
