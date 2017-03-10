import omit from 'lodash/fp/omit';
import fixtures from './default';

/* eslint-disable max-len */

export default {
  props: omit('assets', fixtures.props)
};
