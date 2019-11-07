import {set} from 'lodash/fp';
import fixture from './start';

export default set('props.animated', false, fixture);
