import assignment from './assignment-modules';

const props = {
  ...assignment.props,
  modal: {
    ...assignment.props.modal,
    disabled: true,
    error: 'Unable to load content. Please try again.'
  }
};

export default {props};
