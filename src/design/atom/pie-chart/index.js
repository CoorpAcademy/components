import createD3Widget from '../../../util/create-d3-widget';
import nv from 'nvd3';

export default createD3Widget(options => (
  nv.models.pieChart()
    .x(d => d.label)
    .y(d => d.value)
    .showLabels(true)
));
