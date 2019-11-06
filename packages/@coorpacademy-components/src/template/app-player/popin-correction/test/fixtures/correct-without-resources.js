import {set} from 'lodash/fp';
import correctResources from './correct-open-resources-with-video';

export default set('props.resources.value', [], correctResources);
