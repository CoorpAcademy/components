import {AssignmentEditionPropsFixture} from '../../types';
import unavailable from '../../../content-selection-list/test/fixtures/availability-warning';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {
    ...filled.props,
    contents: unavailable.props
  }
};
export default fixture;
