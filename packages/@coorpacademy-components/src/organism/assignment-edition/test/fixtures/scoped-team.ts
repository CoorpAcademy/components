import {AssignmentEditionPropsFixture} from '../../types';
import team from '../../../assignment-audience/test/fixtures/team-mode';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {...filled.props, audience: team.props}
};
export default fixture;
