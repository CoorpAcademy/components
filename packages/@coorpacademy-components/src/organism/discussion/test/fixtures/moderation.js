import Post from '../../../../molecule/forum-thread/test/fixtures/default';

const post = Post.props;

export default {
  props: {
    title: 'Moderation',
    hideComments: true,
    threads: [post, post, post]
  }
};
