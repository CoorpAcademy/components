var d3 = require('d3');
global.d3 = d3;
var nv = require('nvd3');

var pie = nv.models.pieChart()
  .x(function(d) { return d.label; })
  .y(function(d) { return d.value; })
  .showLabels(true);

var Chart = function(props) {
  this.props = props;
};

Chart.prototype.type = 'Widget';
Chart.prototype.count = 1;
Chart.prototype.init = function() {
  var domNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  setTimeout(() => this.update(null, domNode), 0);
  return domNode;
};

Chart.prototype.update = function(previous, domNode) {
  if (this.props.height) domNode.setAttribute('height', this.props.height);
  if (this.props.width) domNode.setAttribute('width', this.props.width);

  d3.select(domNode)
    .datum(this.props.data)
    .transition().duration(350)
    .call(pie);

  return domNode;
};

Chart.prototype.destroy = function(domNode) {
};

export default ({createWidget}, options) => {
  const update = (props, prev, el) => {
    if (props.height) el.setAttribute('height', props.height);
    if (props.width) el.setAttribute('width', props.width);

    d3.select(el)
      .datum(props.data)
      .transition().duration(350)
      .call(pie);

    return el;
  };

  const destroy = (el) => {};

  return createWidget({
    tagName: 'svg',
    namespaceURI: 'http://www.w3.org/2000/svg',
    update,
    destroy
  }, options);
};
