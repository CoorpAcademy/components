import assignment from './assignment-modules';

const props = {
  ...assignment.props,
  modal: {...assignment.props.modal, disabled: true}
};

export default {props};
