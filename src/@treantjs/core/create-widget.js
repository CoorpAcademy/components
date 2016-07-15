import assign from 'lodash/fp/assign';
import noop from 'lodash/fp/noop';
import uniqueId from 'lodash/fp/uniqueId';

const TYPE = '@treantjs/widget';

const createWidget = options => {
  options = assign({
    tagName: 'div',
    namespaceURI: 'http://www.w3.org/1999/xhtml',
    init: noop,
    update: noop,
    destroy: noop,
    id: uniqueId('widget')
  }, options);

  const Widget = function(properties = {}) {
    this.properties = properties;
  };

  Widget.prototype.name = 'Widget';
  Widget.prototype.id = options.id;
  Widget.prototype.type = TYPE;

  Widget.prototype.tagName = options.tagName;
  Widget.prototype.namespaceURI = options.namespaceURI;
  Widget.prototype.init = options.init;
  Widget.prototype.update = options.update;
  Widget.prototype.destroy = options.destroy;

  return properties => new Widget(properties);
};

export default createWidget;
export {
  TYPE
};
