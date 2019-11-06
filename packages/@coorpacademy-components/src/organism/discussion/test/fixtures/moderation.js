import {update, uniqueId} from 'lodash/fp';
import Post from '../../../../molecule/forum/forum-thread/test/fixtures/default';

const post = Post.props;

const threads = [post, post, post].map(update('id', () => uniqueId()));

export default {
  props: {
    title: 'Moderation (posts only)',
    hideComments: true,
    threads
  }
};
