import noop from 'lodash/fp/noop';

const TYPE = '@treantjs/widget';

const Widget = function({
  tagName = 'div',
  namespaceURI = 'http://www.w3.org/1999/xhtml',
  init = noop,
  update = noop,
  destroy = noop,
  validate
} = {}) {
  this.tagName = tagName;
  this.namespaceURI = namespaceURI;

  this.init = init;
  this.update = update;
  this.destroy = destroy;

  this.validate = validate;
};

Widget.prototype.type = TYPE;

export default Widget;
export {
  TYPE
};
