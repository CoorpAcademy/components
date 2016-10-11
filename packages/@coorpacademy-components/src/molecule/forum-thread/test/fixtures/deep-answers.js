import Post from '../../../forum-post/test/fixtures/post';
import Answer from '../../../forum-post/test/fixtures/answer';

const post = Post.props;
const answer = Answer.props;

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
