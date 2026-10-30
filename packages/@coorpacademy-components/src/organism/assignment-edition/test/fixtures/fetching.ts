import {AssignmentEditionPropsFixture} from '../../types';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {...filled.props, isFetching: true}
};
export default fixture;
