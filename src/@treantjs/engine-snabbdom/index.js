import isString from 'lodash/fp/isString';
import mapKeys from 'lodash/fp/mapKeys';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import compact from 'lodash/fp/compact';
import flatten from 'lodash/fp/flatten';
import reduce from 'lodash/fp/reduce';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import isFunction from 'lodash/fp/isFunction';
import omit from 'lodash/fp/omit';
import set from 'lodash/fp/set';
import split from 'lodash/fp/split';
import contains from 'lodash/fp/contains';

import walker from '../../@treantjs/core/walker';
import resolve from '../../@treantjs/core/resolve';
import map from '../../@treantjs/core/map';

import h from 'snabbdom/h';
import {init} from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import attributesModule from 'snabbdom/modules/attributes';
import styleModule from 'snabbdom/modules/style';
import eventListenersModule from 'snabbdom/modules/eventlisteners';

const patch = init([
  attributesModule,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
]);

const resolver = walker(resolve);

const event = /^on([A-Z].+)/;
const attributes = [
  'allowfullscreen', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare',
  'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'draggable',
  'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple',
  'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly',
  'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'spellcheck', 'translate',
  'truespeed', 'typemustmatch', 'visible'
];

const transformProps = props => {
  return pipe(
    keys,
    reduce((data, key) => {
      const value = props[key];

      // Events
      const match = key.match(event);
      if (match)
        return set(`on.${match[1].toLowerCase()}`, value, data);

      // ClassName
      if (key === 'className')
        return reduce((data, className) => {
          return set(`class.${className}`, true, data);
        }, data, split(' ', value));

      // Attributes
      if (contains(key, attributes))
        return set(`attrs.${key}`, value, data);

      if (key === 'style')
        return set('style', value, data);

      return set(`props.${key}`, value, data);
    }, {})
  )(props);
};

const transform = vNode => {
  if (isString(vNode)) return vNode;
  vNode = resolver(vNode);
  return h(
    vNode.tagName,
    transformProps(vNode.properties),
    map(transform, vNode.children)
  );
};

const render = el => {
  const container = h(el.tagName.toLowerCase());
  let current = el;
  return vTree => {
    const v = transform(vTree);
    current = patch(current, h(container.sel, container.data, [v]));
    return current.children[0].elm;
  };
};

export {
  transform,
  render
};
