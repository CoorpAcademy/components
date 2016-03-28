import createD3Widget from '../../../util/create-d3-widget';
import nv from 'nvd3';

export default createD3Widget(options => (
  nv.models.pieChart()
    .x(function(d) { return d.label; })
    .y(function(d) { return d.value; })
    .showLabels(true)
));