import ForumComment from '../../../../molecule/forum/forum-comment/test/fixtures/default';

export default {
  props: {
    ...ForumComment.props,
    title: 'New discussion',
    threads: [],
    postDisabled: true
  }
};
