import pipe from 'lodash/fp/pipe';
import toPairs from 'lodash/fp/toPairs';
import spread from 'lodash/fp/spread';
import map from 'lodash/fp/map';

export default objects => fn => pipe(
  toPairs,
  map(spread(fn))
)(objects);
