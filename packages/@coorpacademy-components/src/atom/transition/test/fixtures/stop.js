import set from 'lodash/fp/set';
import fixture from './start';

export default set('props.animated', false, fixture);
