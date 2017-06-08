import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

export default defaultsDeep(Default, {
  props: {
    onToggle: () => console.log('toggle !') // eslint-disable-line no-console
  }
});
