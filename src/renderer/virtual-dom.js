import isFunction from 'lodash.isfunction';
import partial from 'lodash.partial';
import defaultsDeep from 'lodash.defaultsdeep';
import mapKeys from 'lodash.mapkeys';
import omit from 'lodash.omit';
import flatten from 'lodash.flatten';
import compact from 'lodash.compact';
import _h from 'virtual-dom/h';
import isVirtualNode from 'virtual-dom/vnode/is-vnode';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

const event = /^on[A-Z].+/;
const transformProps = (props) => mapKeys(props, (value, key) => {
  if(event.test(key)) return key.toLowerCase();
  return key;
});

const h = (tag, props, ...children) => {
  const _tag = isFunction(tag) ? 'div' : tag;
  const _props = omit(isFunction(tag) ? props : transformProps(props), 'children');
  const _children = compact(flatten(props && props.children || children || []));

  const vTree = _h(
    _tag,
    _props,
    _children
  );
  if (isFunction(tag)) vTree.tagName = tag;

  return vTree;
};

const map = (fun, children) => (children || []).map(fun);

const clone = (child, properties, children) => {
  return h(
    child.tagName,
    defaultsDeep({}, properties, child.properties),
    children || child.children
  );
};

const resolve = (vTree) => {
  if (isFunction(vTree.tagName)) return resolve(vTree.tagName({
    ...vTree.properties,
    children: vTree.children
  }));
  return vTree;
};

const walker = (fun, vTree) => {
  vTree = isVirtualNode(vTree) ? fun(vTree) : vTree;
  if (!vTree.children) return vTree;
  return clone(vTree, null, map(partial(walker, fun), vTree.children));
};

const angularLink = (options) => {
  const {component, scope, element, attrs} = options;

  var shallowTree = component({children: [attrs.value]});
  var linkedTree = walker(resolve, shallowTree);

  var aNode = createElement(linkedTree);
  element[0].appendChild(aNode);

  function watchAction() {
    var shallowTree = component({children: [attrs.value]});
    var newTree = walker(resolve, shallowTree);

    var changes = diff(linkedTree, newTree);
    aNode = patch(aNode, changes);
    linkedTree = newTree;
  }

  scope.$watch('value', function() {
    watchAction();
  });

  scope.$on('$destroy', function() {
    angular.element(aNode).remove();
  });
};

export default {
  h,
  map,
  clone,
  resolve,
  walker,
  angularLink
};
