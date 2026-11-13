import PropTypes from 'prop-types';

export type TagType = 'info' | 'success' | 'failure' | 'warning' | 'progress' | 'default';

const propTypes = {
  // Any string: an unknown key renders a default tag
  status: PropTypes.string,
  palette: PropTypes.oneOf(['tracking']),
  label: PropTypes.string.isRequired
};

export default propTypes;

export type AssignmentStatusTagProps = {
  status?: string | null;
  palette?: 'tracking';
  label: string;
};

export type AssignmentStatusTagPropsFixture = {
  props: AssignmentStatusTagProps;
};
