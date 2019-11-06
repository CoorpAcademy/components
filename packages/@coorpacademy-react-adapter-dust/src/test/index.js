import test from 'ava';
import dust from 'dustjs-linkedin';
import {createElement} from 'react';
import each from 'lodash/fp/each';
import toHelpers from '..';

const macro = (t, {components, template, provider, data}, expected) => {
  const helpers = toHelpers(components, provider);
  each(helper => helper(dust), helpers);
  const compiledTemplate = dust.compile(template, 'template');
  dust.loadSource(compiledTemplate);

  return new Promise((resolve, reject) =>
    dust.render('template', data, (err, out) => {
      if (err) return reject(err);
      t.is(out, expected);
      resolve();
    })
  );
};

test(
  'should attach helper',
  macro,
  {
    components: {
      Title: () => createElement('h1')
    },
    template: '{@title /}'
  },
  '<h1></h1>'
);

test(
  'should wrap component with provider element',
  macro,
  {
    components: {
      Title: () => createElement('h1')
    },
    provider: ({children}) => createElement('strong', null, children),
    template: '{@title /}'
  },
  '<strong><h1></h1></strong>'
);

test(
  'should pass props',
  macro,
  {
    components: {
      Title: ({children}) => createElement('h1', null, children)
    },
    template: '{@title children="foo"/}'
  },
  '<h1>foo</h1>'
);

test(
  'should extract provider props from context',
  macro,
  {
    components: {
      Title: () => createElement('h1')
    },
    provider: ({tagName}) => createElement(tagName),
    template: '{@title context="context"/}',
    data: {
      context: {tagName: 'blink'}
    }
  },
  '<blink></blink>'
);
