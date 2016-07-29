import test from 'ava';
import { extractImage } from '../image';

const skin = {
  images: {
    foo: 'fooz',
    custom: 'customz'
  },
  properties: {
    foo: {
      bar: 'barz'
    },
    custom: {
      plop: 'plopz'
    }
  }
};

test('should extract default image with properties', t => {
  const style = extractImage('foo', skin);
  t.is(style.backgroundImage, 'url(fooz)');
  t.is(style.bar, 'barz');
});

test('should extract custom image with properties', t => {
  const style = extractImage('custom', skin, 'foo');
  t.is(style.backgroundImage, 'url(customz)');
  t.is(style.bar, undefined);
  t.is(style.plop, 'plopz');
});

test('should extract default image when undefined custom', t => {
  const style = extractImage('void', skin, 'foo');
  t.is(style.backgroundImage, 'url(fooz)');
  t.is(style.bar, 'barz');
  t.is(style.plop, undefined);
});

