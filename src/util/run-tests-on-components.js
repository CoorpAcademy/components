import forEachEngine from './for-each-engine';
import forEachFactory from './for-each-factory';

export default tests => {
  forEachEngine((name, engine) => {
    forEachFactory(tests(name, engine));
  });
};
