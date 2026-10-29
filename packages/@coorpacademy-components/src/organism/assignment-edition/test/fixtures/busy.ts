import {AssignmentEditionPropsFixture} from '../../types';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {...filled.props, busy: true}
};
export default fixture;
