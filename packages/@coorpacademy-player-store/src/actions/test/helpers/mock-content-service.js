import Promise from 'bluebird';

const Content = t => ({
  find(type, ref) {
    if (type === 'slide') {
      t.is(ref, 'slideRef');
      return Promise.resolve({chapter_id: 'chapId', _id: ref, foo: 'bar'});
    } else if (type === 'chapter') {
      t.is(ref, 'chapId');
      return Promise.resolve({_id: ref, foo: 'baz'});
    }
    t.fail();
  },

  getInfo(contentRef, engineRef, engineVersion) {
    t.is(contentRef, 'chapId');
    t.is(engineRef, 'microlearning');
    t.is(engineVersion, '1');
    return {nbSlides: 20};
  }
});

export default Content;
