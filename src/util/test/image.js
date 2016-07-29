import test from 'ava';
import { extractImage } from '../image';

const skin = {
  images: {
    foo: 'fooz',
    fooplup: 'fooplupz',
    custom: 'customz'
  },
  properties: {
    foo: {
      bar: 'barz'
    },
    'foo-2': {
      bar: 'barz2'
    },
    custom: {
      bar: 'custombarz',
      plop: 'plopz'
    }
  }
};

test('should extract default image with default properties', t => {
  const style = extractImage('foo', skin);
  t.is(style.backgroundImage, 'url(fooz)');
  t.is(style.bar, 'barz');
});

test('should extract custom image with default properties', t => {
  const style = extractImage('fooplup', skin, 'foo');
  t.is(style.backgroundImage, 'url(fooplupz)');
  t.is(style.bar, 'barz');
});

test('should extract default image and override with custom properties', t => {
  const style = extractImage('foo-2', skin, 'foo');
  t.is(style.backgroundImage, 'url(fooz)');
  t.is(style.bar, 'barz2');
});

test('should extract custom image with properties', t => {
  const style = extractImage('custom', skin, 'foo');
  t.is(style.backgroundImage, 'url(customz)');
  t.is(style.bar, 'custombarz');
  t.is(style.plop, 'plopz');
});

test('should extract default image when undefined custom', t => {
  const style = extractImage('void', skin, 'foo');
  t.is(style.backgroundImage, 'url(fooz)');
  t.is(style.bar, 'barz');
  t.is(style.plop, undefined);
});

