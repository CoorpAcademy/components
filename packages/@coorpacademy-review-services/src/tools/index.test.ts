import test from 'ava';
import {buildURL} from '.';

test('adds lang when locale is provided', t => {
  const url = buildURL('https://example.com/api/resource', 'fr');
  t.true(url.includes('lang=fr'));
  t.true(url.startsWith('https://example.com/api/resource'));
});

test('omits lang when locale is undefined', t => {
  const url = buildURL('https://example.com/api/resource');
  t.false(url.includes('lang='));
});

test('adds multiple query params', t => {
  const url = buildURL('https://example.com/api/items', 'en', {
    conditions: JSON.stringify({ref: 'foo'})
  });
  t.true(url.includes('lang=en'));
  t.true(url.includes('conditions=%7B%22ref%22%3A%22foo%22%7D'));
});

test('ensure there is no trailing slash before query', t => {
  const url = buildURL('https://example.com/api/items', 'en', {
    foo: 'bar'
  });
  t.true(url.startsWith('https://example.com/api/items?'));
});
