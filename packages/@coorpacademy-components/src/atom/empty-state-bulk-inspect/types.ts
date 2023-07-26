import PropTypes from 'prop-types';

const propTypes = {
  firstMessage: PropTypes.string.isRequired,
  secondMessage: PropTypes.string.isRequired
};

export default propTypes;

export type EmptyStateBulkInspectProps = {
  firstMessage: string;
  secondMessage: string;
};

export type Fixture = {
  props: EmptyStateBulkInspectProps;
};
