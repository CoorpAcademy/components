import Post from '../../../forum-post/test/fixtures/editable';

const post = Post.props;
const answer = Post.props;

export default {
  props: {
    ...post,
    answers: [answer, answer]
  }
};
