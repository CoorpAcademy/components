import {ContentPropsType} from '../../types';
import assignment from './assignment';

// No content yet. The select-all and Delete are passed as for a filled list:
// the list hides them itself and shows the placeholder.
const props: ContentPropsType = {
  ...assignment.props,
  checkboxWithTitle: {...assignment.props.checkboxWithTitle!, title: '0 items'},
  list: {
    items: [],
    emptyResult: {
      title: 'No modules added yet',
      description: 'Choose the modules learners should complete.'
    }
  }
};

export default {props};
