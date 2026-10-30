import {AssignmentEditionPropsFixture} from '../../types';
import hidden from '../../../content-selection-list/test/fixtures/hidden-row';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {
    ...filled.props,
    contents: {
      ...hidden.props,
      error: 'Remove hidden modules before publishing.',
      list: {
        ...hidden.props.list,
        items: hidden.props.list.items!.map(item =>
          item.hidden
            ? {
                ...item,
                hint: 'This module is hidden from learners. You can remove it from this assignment.'
              }
            : item
        )
      }
    }
  }
};
export default fixture;
