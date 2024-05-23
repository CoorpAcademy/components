import {includes, toLower, pipe} from 'lodash/fp';

const searchValueIncluded = (skill, value) => {
  return pipe(toLower, includes(toLower(value)))(skill);
};

export default searchValueIncluded;
