import defaultsDeep from 'lodash/fp/defaultsDeep';
import compact from 'lodash/fp/compact';
import flatten from 'lodash/fp/flatten';
import reduce from 'lodash/fp/reduce';
import pipe from 'lodash/fp/pipe';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import isFunction from 'lodash/fp/isFunction';
import omit from 'lodash/fp/omit';
import set from 'lodash/fp/set';
import split from 'lodash/fp/split';
import _h from 'snabbdom/h';
import {init} from 'snabbdom';
import classModule from 'snabbdom/modules/class';
import propsModule from 'snabbdom/modules/props';
import styleModule from 'snabbdom/modules/style';
import eventListenersModule from 'snabbdom/modules/eventlisteners';

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
]);

const event = /^on([A-Z].+)/;

const transformProps = props => {
  if (!props) return props;
  const data = pipe(
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

      if (key === 'style')
        return set('style', value, data);

      return set(`props.${key}`, value, data);
    }, {})
  )(props);

  return data;
};

const h = (tag, props, children) => {
  const isComponent = isFunction(tag);
  const _children = pipe(compact, flatten)(children);

  if (process.env.NODE_ENV !== 'production' && isComponent && tag.validate) {
    tag.validate(props, _children);
  }

  const _tag = isComponent ? 'div' : tag;
  const _props = isComponent ? props : transformProps(props);

  const vTree = _h(
    _tag,
    _props || {},
    _children
  );

  if (isComponent) {
    vTree.sel = tag;
  }

  return vTree;
};

const clone = (vNode, props, children) => {
  return _h(
    vNode.sel,
    defaultsDeep(
      vNode.data,
      isFunction(vNode.sel) ? props : transformProps(props)
    ),
    children || vNode.children
  );
};

const resolve = vTree => {
  if (!isFunction(vTree.sel)) return vTree;
  return resolve(vTree.sel(vTree.data, vTree.children));
};

const walker = (fun, vTree) => {
  vTree = vTree.text ? vTree : fun(vTree);
  if (!vTree.children) return vTree;
  return clone(vTree, null, map(c => walker(fun, c), vTree.children));
};

const render = el => {
  const container = h(el.tagName.toLowerCase());
  let current = el;
  return vTree => {
    current = patch(current, clone(container, null, [walker(resolve, vTree)]));
    return current.children[0].elm;
  };
};

const omitHook = omit(['hook']);
const widget = options => {
  options = {
    tagName: 'div',
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    init: () => {},
    update: () => {},
    destroy: () => {},
    validate: null,
    ...options
  };

  const Widget = props => {
    return _h(
      options.tagName,
      {
        props,
        hook: {
          insert: vNode => options.init(vNode.data.props, vNode.elm),
          update: (oldVNode, vNode) => options.update(vNode.data.props, oldVNode.data.props, vNode.elm),
          destroy: vNode => options.destroy(vNode.elm)
        }
      }
    );
  };

  Widget.validate = options.validate;

  return Widget;
};

export default {
  h,
  map,
  clone,
  resolve,
  walker,
  render,
  widget
};
