import test from 'ava';
import {createBrowserHistory, createHashHistory, createMemoryHistory} from '../history';

test('createBrowserHistory', t => {
  const history = createBrowserHistory();
  t.is(history.createHref('/foo?bar#baz'), '/foo?bar#baz');
  t.is(history.createHref(new URL('http://history/foo?bar#baz')), '/foo?bar#baz');

  const historyWithStringBasename = createBrowserHistory({basename: '/quz'});
  t.is(historyWithStringBasename.createHref('/foo?bar#baz'), '/quz/foo?bar#baz');
  t.is(
    historyWithStringBasename.createHref(new URL('http://history/foo?bar#baz')),
    '/quz/foo?bar#baz'
  );

  const historyWithLocationBasename = createBrowserHistory({
    basename: new URL('http://history/quz')
  });
  t.is(historyWithLocationBasename.createHref('/foo?bar#baz'), '/quz/foo?bar#baz');
  t.is(
    historyWithLocationBasename.createHref(new URL('http://history/foo?bar#baz')),
    '/quz/foo?bar#baz'
  );
});

test('createHashHistory', t => {
  const history = createHashHistory();
  t.is(history.createHref('/foo?bar#baz'), '#/foo?bar#baz');
  t.is(history.createHref(new URL('http://history/foo?bar#baz')), '#/foo?bar#baz');

  const historyWithStringBasename = createHashHistory({basename: '/quz'});
  t.is(historyWithStringBasename.createHref('/foo?bar#baz'), '#/foo?bar#baz');
  t.is(
    historyWithStringBasename.createHref(new URL('http://history/foo?bar#baz')),
    '#/foo?bar#baz'
  );

  const historyWithLocationBasename = createHashHistory({
    basename: new URL('http://history/quz')
  });
  t.is(historyWithLocationBasename.createHref('/foo?bar#baz'), '#/foo?bar#baz');
  t.is(
    historyWithLocationBasename.createHref(new URL('http://history/foo?bar#baz')),
    '#/foo?bar#baz'
  );
});

test('createMemoryHistory', t => {
  const history = createMemoryHistory();
  t.is(history.createHref('/foo?bar#baz'), '/foo?bar#baz');
  t.is(history.createHref(new URL('http://history/foo?bar#baz')), '/foo?bar#baz');

  const historyWithStringBasename = createMemoryHistory({basename: '/quz'});
  t.is(historyWithStringBasename.createHref('/foo?bar#baz'), '/quz/foo?bar#baz');
  t.is(
    historyWithStringBasename.createHref(new URL('http://history/foo?bar#baz')),
    '/quz/foo?bar#baz'
  );

  const historyWithLocationBasename = createMemoryHistory({
    basename: new URL('http://history/quz')
  });
  t.is(historyWithLocationBasename.createHref('/foo?bar#baz'), '/quz/foo?bar#baz');
  t.is(
    historyWithLocationBasename.createHref(new URL('http://history/foo?bar#baz')),
    '/quz/foo?bar#baz'
  );
});
