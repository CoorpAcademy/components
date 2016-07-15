import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import concat from 'lodash/fp/concat';
import reverse from 'lodash/fp/reverse';
import compact from 'lodash/fp/compact';
import join from 'lodash/fp/join';

const addClassName = className => pipe(
  get('properties.className'),
  concat(className),
  compact,
  reverse,
  join(' ')
);

export default addClassName;
