import { checker, createValidate } from '../../../util/validation';
import createD3Widget from '../../../util/create-d3-widget';
import nv from 'nvd3';

const propTypes = checker.shape({});

export default createD3Widget(options => (
  nv.models.pieChart()
    .x(d => d.label)
    .y(d => d.value)
    .showLabels(true)
), createValidate(propTypes));
