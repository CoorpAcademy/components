import {ContentPropsType} from '../../types';
import assignment from './assignment';

// Rows whose Delete has a visible label, as Coorpmanager sends it.
const props: ContentPropsType = {
  ...assignment.props,
  list: {
    ...assignment.props.list,
    items: (assignment.props.list.items || []).map(item => ({
      ...item,
      deleteButton: {...item.deleteButton, label: 'Delete'}
    }))
  }
};

export default {props};
