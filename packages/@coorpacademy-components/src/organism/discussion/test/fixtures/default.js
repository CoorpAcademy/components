import update from 'lodash/fp/update';
import uniqueId from 'lodash/fp/uniqueId';
import Thread from '../../../../molecule/forum/forum-thread/test/fixtures/default';
import ThreadDeep from '../../../../molecule/forum/forum-thread/test/fixtures/deep-answers';
import ForumComment from '../../../../molecule/forum/forum-comment/test/fixtures/default';

const thread = Thread.props;
const thread2 = ThreadDeep.props;

const threads = [thread, thread2, thread, thread2].map(update('id', () => uniqueId()));

export default {
  props: {
    ...ForumComment.props,
    title: 'Sandbox discussion',
    threads
  }
};
