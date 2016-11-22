import test from 'ava';
import {useBasename} from '../history';

[
  [{basename: '/foo'}, '/bar', '/foo/bar'],
  [undefined, '/bar', '/bar'],
  [{}, '/bar', '/bar'],
  [{basename: '/foo'}, 'http://foo/bar', 'http://foo/bar'],
  [{basename: '/foo'}, '#', '#']
].forEach(([options, input, expect]) => {
  test(`should add createHref with ${JSON.stringify(options)} and return '${expect}'`, t => {
    const historyFactory = () => {
      return {};
    };

    const history = useBasename(historyFactory)(options);

    t.truthy(history.createHref);
    t.is(history.createHref(input), expect);
  });
});
