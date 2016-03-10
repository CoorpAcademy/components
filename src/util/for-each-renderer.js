import mapValues from 'lodash.mapvalues';

import react from '../renderer/react';
import virtualDom from '../renderer/virtual-dom';

export default (fn) => mapValues({
  'react': react,
  'virtual-dom': virtualDom
}, fn);
