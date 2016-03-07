import pipe from 'lodash/fp/pipe';
import toPairs from 'lodash/fp/toPairs';
import spread from 'lodash/fp/spread';
import map from 'lodash/fp/map';

import react from '../engine/react';
import snabbdom from '../engine/snabbdom';
import virtualDom from '../engine/virtual-dom';

export default fn => pipe(
  toPairs,
  map(spread(fn))
)({
  react,
  snabbdom,
  'virtual-dom': virtualDom
});
