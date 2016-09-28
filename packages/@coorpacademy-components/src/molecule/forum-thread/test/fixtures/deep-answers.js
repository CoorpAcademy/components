import Post from '../../../forum-post/test/fixtures/post';
import Answer from '../../../forum-post/test/fixtures/answer';

const post = Post.props;
const answer = Answer.props;

export default {
  props: {
    post: {
      ...post,
      answers: [{
        post: {
          ...answer,
          answers: [{
            post: {
              ...answer,
              answers: [{
                post: {
                  ...answer,
                  answers: [{
                    post: {
                      ...answer
                    }
                  }]
                }
              }]
            }
          }]
        }
      }, {
        post: {
          ...answer
        }
      }, {
        post: {
          ...answer
        }
      }, {
        post: {
          ...answer
        }
      }, {
        post: {
          ...answer
        }
      }]
    }
  }
};
