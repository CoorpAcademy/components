import PropTypes from 'prop-types';

export type Translate = (key: string, values?: Record<string, string | number>) => string;

export type Person = {
  id: string;
  name: string;
  login: string;
  current?: boolean;
  deactivated?: boolean;
  unresolved?: boolean;
  status?: 'ok' | 'unknown' | 'ambiguous' | 'deactivated';
  onSelect?: () => void;
  onRemove?: () => void;
};

export const personPropTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  current: PropTypes.bool,
  deactivated: PropTypes.bool,
  unresolved: PropTypes.bool,
  status: PropTypes.oneOf(['ok', 'unknown', 'ambiguous', 'deactivated']),
  onSelect: PropTypes.func,
  onRemove: PropTypes.func
};

export type PersonTagsProps = {
  users: Person[];
  translate: Translate;
  mode?: 'display' | 'select' | 'remove';
  disabled?: boolean;
  'aria-label'?: string;
};

export const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
  translate: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['display', 'select', 'remove']),
  disabled: PropTypes.bool,
  'aria-label': PropTypes.string
};
