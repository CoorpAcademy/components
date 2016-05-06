import createWidget from './create-widget';
import d3 from 'd3';
global.d3 = d3;

const createNVD3Widget = createChart => (engine, options) => {
  const init = (props, el) => {
    setTimeout(() => update(props, null, el));
  };

  const update = (props, prev, el) => {
    if (props.height) el.setAttribute('height', props.height);
    if (props.width) el.setAttribute('width', props.width);

    const chart = createChart(options);

    d3.select(el)
      .datum(props.data)
      .transition().duration(350)
      .call(chart);

    return el;
  };

  const destroy = el => {};

  return createWidget(engine)({
    tagName: 'svg',
    namespaceURI: 'http://www.w3.org/2000/svg',
    init,
    update,
    destroy
  });
};

export default createNVD3Widget;
