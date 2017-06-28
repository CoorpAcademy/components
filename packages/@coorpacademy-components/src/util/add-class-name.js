import compact from 'lodash/fp/compact';
import concat from 'lodash/fp/concat';
import join from 'lodash/fp/join';
import pipe from 'lodash/fp/pipe';
import reverse from 'lodash/fp/reverse';
import split from 'lodash/fp/split';
import update from 'lodash/fp/update';

const addClassName = className =>
  update('className', pipe(split(' '), concat(className), reverse, compact, join(' ')));

export default addClassName;
