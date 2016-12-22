import update from 'lodash/fp/update';
import uniqueId from 'lodash/fp/uniqueId';
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
