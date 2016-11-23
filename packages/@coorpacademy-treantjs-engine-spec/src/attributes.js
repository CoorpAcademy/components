import {get, getOr} from 'lodash/fp';
import {h} from '@coorpacademy/treantjs-core';

export default (test, {render, transform}) => {
  const attributes = {
    'data-custom': 'foo'
  };

  Object.keys(attributes).forEach(key => {
    const prop = get(key, attributes);

    const tagName = getOr('div', 'tagName', prop);
    const value = getOr(prop, 'value', prop);
    const assert = getOr((t, el) => {
      const attribute = el.getAttribute(key);
      t.deepEqual(attribute, value);
    }, 'assert', prop);

    test(`should render ${key} attribute`, t => {
      const container = document.createElement('div');
      const update = render(container);
      const vTree = h(tagName, {
        [key]: value
      });

      const el = update(vTree);
      assert(t, el);
    });
  });
};
