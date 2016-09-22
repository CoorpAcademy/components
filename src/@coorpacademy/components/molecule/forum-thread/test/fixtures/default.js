import {props as post} from '../../../forum-post/test/fixtures/post';
import {props as answer} from '../../../forum-post/test/fixtures/answer';

export default {
  props: {
    thread: {
      post,
      answers: [answer, answer]
    }
  }
};
