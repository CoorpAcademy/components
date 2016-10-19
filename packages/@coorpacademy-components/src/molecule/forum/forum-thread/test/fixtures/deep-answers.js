import Post from '../../../forum-post/test/fixtures/editable';

const post = Post.props;
const answer = Post.props;

const answer1 = {
  ...answer,
  answers: [answer, answer]
};

const answer2 = {
  ...answer,
  answers: [answer1, answer1]
};

export default {
  props: {
    ...post,
    answers: [
      answer,
      answer,
      answer,
      answer,
      answer1,
      answer2,
      answer1
    ]
  }
};
