import assign from 'lodash/fp/assign';
import compact from 'lodash/fp/compact';
import flatten from 'lodash/fp/flatten';

class VNode {
  constructor(tagName, properties, children) {
    this.tagName = tagName;
    this.properties = assign({}, properties);
    this.children = flatten(compact(children));
  }
}

export default VNode;
