import PropTypes from 'prop-types';
import {Person, Translate, personPropTypes} from '../../molecule/person-tags/types';

export type OwnersModel = {
  query: string;
  selected: Person[];
  suggestions: Person[];
  selfAvailable: boolean;
  selfSelected: boolean;
  warningCount: number;
  loading?: boolean;
  error?: boolean;
  resolutionError?: boolean;
  onSearch(query: string): void;
  onAddMe(): void;
  onRetry?(): void;
};

export type PopulationOwnersProps = {
  model: OwnersModel;
  disabled?: boolean;
  translate: Translate;
};

export const propTypes = {
  model: PropTypes.shape({
    query: PropTypes.string.isRequired,
    selected: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
    suggestions: PropTypes.arrayOf(PropTypes.shape(personPropTypes).isRequired).isRequired,
    selfAvailable: PropTypes.bool.isRequired,
    selfSelected: PropTypes.bool.isRequired,
    warningCount: PropTypes.number.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    resolutionError: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
    onAddMe: PropTypes.func.isRequired,
    onRetry: PropTypes.func
  }).isRequired,
  disabled: PropTypes.bool,
  translate: PropTypes.func.isRequired
};
