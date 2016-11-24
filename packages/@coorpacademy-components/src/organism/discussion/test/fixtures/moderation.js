import Post from '../../../../molecule/forum/forum-thread/test/fixtures/default';

const post = Post.props;

export default {
  props: {
    title: 'Moderation (posts only)',
    hideComments: true,
    threads: [post, post, post]
  }
};
