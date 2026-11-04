import {AssignmentEditionPropsFixture} from '../../types';
import group from '../../../assignment-audience/test/fixtures/group-mode';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {...filled.props, audience: group.props}
};
export default fixture;
