import PropTypes from 'prop-types';

export type Person = {
  id: string;
  name: string;
  login: string;
  current?: boolean;
  selectDisabled?: boolean;
  selectAriaLabel?: string;
  removeAriaLabel?: string;
  status: 'ok' | 'unknown' | 'ambiguous' | 'deactivated';
  onSelect?: () => void;
  onRemove?: () => void;
};

export const personPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  current: PropTypes.bool,
  selectDisabled: PropTypes.bool,
  selectAriaLabel: PropTypes.string,
  removeAriaLabel: PropTypes.string,
  status: PropTypes.oneOf(['ok', 'unknown', 'ambiguous', 'deactivated']).isRequired,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func
};

export type PersonTagsLabels = {
  you: string;
  deactivated: string;
  unknown: string;
  ambiguous: string;
  emptyTitle: string;
  emptyMessage: string;
};

export const labelsPropTypes = {
  you: PropTypes.string.isRequired,
  deactivated: PropTypes.string.isRequired,
  unknown: PropTypes.string.isRequired,
  ambiguous: PropTypes.string.isRequired,
  emptyTitle: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string.isRequired
};

export type PersonTagsProps = {
  users: Person[];
  labels: PersonTagsLabels;
  mode?: 'display' | 'select' | 'remove';
  compact?: boolean;
  disabled?: boolean;
  'aria-label'?: string;
};

export const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
  labels: PropTypes.shape(labelsPropTypes).isRequired,
  mode: PropTypes.oneOf(['display', 'select', 'remove']),
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
  'aria-label': PropTypes.string
};
