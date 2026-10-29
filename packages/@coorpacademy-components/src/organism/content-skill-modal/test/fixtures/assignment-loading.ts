import assignment from './assignment-modules';

const props = {
  ...assignment.props,
  modal: {...assignment.props.modal, disabled: true},
  contentList: {...assignment.props.contentList, isFetching: true}
};

export default {props};
