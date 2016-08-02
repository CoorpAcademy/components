import assign from 'lodash/fp/assign';
import compact from 'lodash/fp/compact';
import flatten from 'lodash/fp/flatten';

const TYPE = '@treantjs/vnode';

const VNode = function(tagName, properties, children) {
  this.tagName = tagName;
  this.properties = assign({}, properties);
  this.children = flatten(compact(children));
}

VNode.prototype.type = TYPE;

export default VNode;
export {
  TYPE
};
