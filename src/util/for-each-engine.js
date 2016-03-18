import mapValues from 'lodash.mapvalues';

import react from '../engine/react';
import virtualDom from '../engine/virtual-dom';

export default (fn) => mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, fn);
