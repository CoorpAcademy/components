import { spec, validate, check } from '../../../util/proptypes-checker';
import createD3Widget from '../../../util/create-d3-widget';
import nv from 'nvd3';

const propTypes = spec({
});

export default createD3Widget(options => (
  nv.models.pieChart()
    .x(d => d.label)
    .y(d => d.value)
    .showLabels(true)
), validate(propTypes));
