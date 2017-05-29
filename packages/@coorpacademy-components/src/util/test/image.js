import test from 'ava';
import extractor from '../image';

const skin = {
  images: {
    foo: 'fooz',
    fooplup: 'fooplupz',
    custom: 'customz'
  }
};

test('should return null when no image and no default provided', t => {
  const extract = extractor(skin);
  const style = extract('none');
  t.is(style, null);
});

test('should return default when no image and default provided', t => {
  const extract = extractor(skin, 'foo');
  const style = extract('none');
  t.is(style.backgroundImage, 'url(fooz)');
});

test('should extract image with properties', t => {
  const extract = extractor(skin);
  const style = extract('foo');
  t.is(style.backgroundImage, 'url(fooz)');
});

test('should extract custom image with default properties', t => {
  const extract = extractor(skin, 'foo');
  const style = extract('fooplup');
  t.is(style.backgroundImage, 'url(fooplupz)');
});

test('should extract default image and override with custom properties', t => {
  const extract = extractor(skin, 'foo');
  const style = extract('foo-2');
  t.is(style.backgroundImage, 'url(fooz)');
});

test('should extract custom image with properties', t => {
  const extract = extractor(skin, 'foo');
  const style = extract('custom');
  t.is(style.backgroundImage, 'url(customz)');
});

test('should extract default image when undefined custom', t => {
  const extract = extractor(skin, 'foo');
  const style = extract('void');
  t.is(style.backgroundImage, 'url(fooz)');
});
